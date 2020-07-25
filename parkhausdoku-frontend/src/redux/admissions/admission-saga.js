import {put, select, takeEvery} from "@redux-saga/core/effects";
import {getAuthToken} from "../auth/auth-selector";
import {
    DELETE_ADMISSION,
    DELETE_ADMISSION_FAILED,
    DELETE_ADMISSION_SUCCESS, deleteAdmissionById,
    fetchAllAdmissions, LOAD_ADMISSIONS,
    LOAD_ADMISSIONS_FAILED,
    LOAD_ADMISSIONS_SUCCESS
} from "../utils/admission-utils";


function* loadAdmissions() {

    try {
        const token = yield select(getAuthToken)
        const admissions = yield fetchAllAdmissions(token);
        yield put({type: LOAD_ADMISSIONS_SUCCESS, payload: admissions})
    } catch (e) {
        yield put({type: LOAD_ADMISSIONS_FAILED})
    }
}
function* deleteAdmission() {

    try {
        const token = yield select(getAuthToken)
        yield deleteAdmissionById(token, "2");
        yield put({type: DELETE_ADMISSION_SUCCESS})
    } catch (e) {
        yield put({type: DELETE_ADMISSION_FAILED})
    }
}

export const admissionSaga = [
    takeEvery(LOAD_ADMISSIONS, loadAdmissions),
    takeEvery(DELETE_ADMISSION, deleteAdmission) // WIE BEKOMME ICH HIER DIE ID REIN?
]