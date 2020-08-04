import {all} from "@redux-saga/core/effects";
import {authSaga} from "./auth/auth-saga";
import {buildingSaga} from "./buildings/building-saga";
import {admissionSaga} from "./admissions/admission-saga";


export default function* rootSaga() {
    yield all(
        [...authSaga,
            ...admissionSaga,
            ...buildingSaga,
        ]
    )
}