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
        const buildingsFetched = yield fetchAllOwnedBuildings(token, ownerId);

// extract all Levels from all owned buildings and extend each level by buildingId
        const extractedLevels = buildingsFetched.flatMap((building)=> building.levels.map(level=>({
            ...level,
            buildingId:building.id,
        })))

// extract all admissions from all owned levels and extend each admission by buildingId and levelId
        const admissions = extractedLevels.flatMap((level)=> level.admissions.map(admission=>({
            ...admission,
            buildingId:level.buildingId,
            levelId:level.id,
        })))

// remove extracted levels from building objects
        const buildings = buildingsFetched.map(building=>({
            id:building.id,
            objectName:building.objectName,
            ownerId: building.ownerId,
            model:building.model
        }))

// remove extracted admissions from level objects
        const levels = extractedLevels.map(level=>({
            id:level.id,
            level:level.level,
            planUrl:level.planUrl,
            buildingId:level.buildingId,
        }))
        yield put({type: LOAD_BUILDINGS_SUCCESS, payload: {buildings,admissions,levels}})
    } catch (e) {
        yield put({type: LOAD_BUILDINGS_FAILED})
    }
}

export const buildingSaga = [
    takeEvery(LOAD_BUILDINGS, loadBuildings)
]