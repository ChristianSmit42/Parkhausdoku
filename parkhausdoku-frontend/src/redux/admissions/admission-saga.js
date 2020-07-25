import {put, select, takeEvery} from "@redux-saga/core/effects";
import {getAuthToken} from "../auth/auth-selector";
import {fetchAllAdmissions} from "../../utils/admission-utils";


function* loadAdmissions() {

    try {
        const token = yield select(getAuthToken)
        const admissions = yield fetchAllAdmissions(token);
        yield put({type: 'LOAD_ADMISSIONS_SUCCESS', payload: admissions})
    } catch (e) {
        yield put({type: 'LOAD_ADMISSIONS_FAILED'})
    }
}

export const admissionSaga = [
    takeEvery('LOAD_ADMISSIONS', loadAdmissions)
]