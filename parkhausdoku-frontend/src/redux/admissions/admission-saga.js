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
        const admissionId = action.payload.admissionId;
        const levelId = action.payload.levelId;
        const levelIndex = action.payload.levelIndex;
        const buildingId = action.payload.buildingId;
        yield deleteAdmissionById(token, admissionId, buildingId, levelId);
        yield put({
            type: DELETE_ADMISSION_SUCCESS, payload: {
                admissionId: admissionId,
                buildingId: buildingId,
                levelId: levelId,
                levelIndex: levelIndex,
            }
        })
    } catch (e) {
        yield put({type: DELETE_ADMISSION_FAILED})
    }
}

export const admissionSaga = [
    takeEvery(DELETE_ADMISSION, deleteAdmission)
]