import {put, takeEvery} from "@redux-saga/core/effects";

import {SET_LEVELS, SET_LEVELS_FAILED, SET_LEVELS_SUCCESS} from "../utils/level-utils";

function* setLevels(action) {

    try {
        const levels = action.payload;
        yield put({type: SET_LEVELS_SUCCESS, payload: levels})
    } catch (e) {
        yield put({type: SET_LEVELS_FAILED})
    }
}

export const levelSaga = [
    takeEvery(SET_LEVELS, setLevels)
]