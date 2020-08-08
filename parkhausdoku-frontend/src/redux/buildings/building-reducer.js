import {LOAD_BUILDINGS, LOAD_BUILDINGS_FAILED, LOAD_BUILDINGS_SUCCESS} from "../utils/building-utils";



const buildingReducer = (state = {status: null, items: []}, action) => {
    switch (action.type) {
        case LOAD_BUILDINGS:
            return {status: 'PENDING'}
        case LOAD_BUILDINGS_SUCCESS:
            return {status: 'SUCCESS', items: action.payload.buildings}
        case LOAD_BUILDINGS_FAILED:
            return {status: 'FAILED'}
        default:
            return state
    }
}
export default buildingReducer;