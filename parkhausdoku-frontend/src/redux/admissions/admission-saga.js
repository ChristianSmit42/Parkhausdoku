import {put, select, takeEvery} from "@redux-saga/core/effects";
import {getAuthToken} from "../auth/auth-selector";
import {
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
        console.error("failed to delete admission " , e)
        yield put({type: DELETE_ADMISSION_FAILED})
    }
}

export const admissionSaga = [
    takeEvery(DELETE_ADMISSION, deleteAdmission)
]