import {LOAD_BUILDINGS_FAILED, LOAD_BUILDINGS_SUCCESS} from "../utils/building-utils";

const levelReducer = (state = {status: null,items:[]}, action) => {
    switch (action.type) {
        case LOAD_BUILDINGS_SUCCESS:
            return {status: 'SUCCESS', items: action.payload.levels}
        case LOAD_BUILDINGS_FAILED:
            return {status: 'FAILED'}
        default:
            return state
    }
}
export default levelReducer