import {all} from "@redux-saga/core/effects";
import {authSaga} from "./auth/auth-saga";
import {buildingSaga} from "./buildings/building-saga";
import {levelSaga} from "./levels/level-saga";


export default function* rootSaga() {
    yield all(
        [...authSaga,
            ...buildingSaga,
            ...levelSaga,
        ]
    )
}