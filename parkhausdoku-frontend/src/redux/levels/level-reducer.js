
import {SET_LEVELS, SET_LEVELS_FAILED, SET_LEVELS_SUCCESS} from "../utils/level-utils";

const levelReducer = (state = {status: null,levels:[]}, action) => {
    switch (action.type) {
        case SET_LEVELS:
            return {status: 'PENDING'}
        case SET_LEVELS_SUCCESS:
            return {
                status:'SUCCESS',
                levels: action.payload,
            }
        case SET_LEVELS_FAILED:
            return {status:'FAILED'}
        default:
            return state
    }
}
export default levelReducer