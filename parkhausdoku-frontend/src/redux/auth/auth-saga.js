import {put, takeEvery} from "@redux-saga/core/effects";
import {performLogin} from "../../utils/auth-utils";


function* loginAction(action) {
    const {username, password} = action.payload;
    try {
        const token = yield performLogin(username, password);
        yield put({type: 'LOGIN_SUCCESS', payload: {token}})
    } catch (e) {
        yield put({type: 'LOGIN_FAILED'})
    }
}

export const authSaga = [
    takeEvery('LOGIN', loginAction)
]