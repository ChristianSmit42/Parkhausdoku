import {all} from "@redux-saga/core/effects";
import {admissionSaga} from "./admissions/admission-saga";
import {authSaga} from "./auth/auth-saga";
import {buildingSaga} from "./buildings/building-saga";


export default function* rootSaga() {
    yield all(
        [...authSaga,
            ...admissionSaga,
            ...buildingSaga
        ]
    )
}