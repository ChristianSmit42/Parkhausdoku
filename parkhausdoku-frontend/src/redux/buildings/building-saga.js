import {put, select, takeEvery} from "@redux-saga/core/effects";
import {getAuthToken} from "../auth/auth-selector";
import {
    fetchAllOwnedBuildings,
    LOAD_BUILDINGS,
    LOAD_BUILDINGS_FAILED,
    LOAD_BUILDINGS_SUCCESS
} from "../utils/building-utils";

function* loadBuildings(action) {

    try {
        const token = yield select(getAuthToken)
        const ownerId = action.payload.ownerId;
        const buildings = yield fetchAllOwnedBuildings(token, ownerId);
        yield put({type: LOAD_BUILDINGS_SUCCESS, payload: buildings})
    } catch (e) {
        yield put({type: LOAD_BUILDINGS_FAILED})
    }
}

export const buildingSaga = [
    takeEvery(LOAD_BUILDINGS, loadBuildings)
]