import {put, select, takeEvery} from "@redux-saga/core/effects";
import {getAuthToken} from "../auth/auth-selector";
import {
    ADD_ADMISSION,
    ADD_ADMISSION_FAILED,
    ADD_ADMISSION_SUCCESS, addNewAdmission,
    DELETE_ADMISSION,
    DELETE_ADMISSION_FAILED,
    DELETE_ADMISSION_SUCCESS, deleteAdmissionById,

} from "../utils/admission-utils";

function* deleteAdmission(action) {

    try {
        const token = yield select(getAuthToken)
        const admissionId = action.payload.admission.id;
        const levelId = action.payload.admission.levelId;
        const buildingId = action.payload.admission.buildingId;
        yield deleteAdmissionById(token, admissionId, buildingId, levelId);
        yield put({
            type: DELETE_ADMISSION_SUCCESS, payload: {
                admissionId,
            }
        })
    } catch (e) {
        console.error("failed to delete admission ", e)
        yield put({type: DELETE_ADMISSION_FAILED})
    }
}

function* addAdmission(action) {
    try {
        const token = yield select(getAuthToken)
        const levelId = action.payload.levelId;
        const buildingId = action.payload.buildingId;
        const information = action.payload.information;
        const responseAdmission =  yield addNewAdmission(token, information, buildingId, levelId);

        const admission = yield {
            ...responseAdmission,
            buildingId:buildingId,
            levelId:levelId,
        }
        yield put({
            type: ADD_ADMISSION_SUCCESS, payload: {
                admission
            }
        })
    } catch (e) {
        console.error("failed to add admission ", e)
        yield put({type: ADD_ADMISSION_FAILED})
    }
}

export const admissionSaga = [
    takeEvery(DELETE_ADMISSION, deleteAdmission),
    takeEvery(ADD_ADMISSION, addAdmission)
]