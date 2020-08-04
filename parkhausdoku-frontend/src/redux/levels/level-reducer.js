
import {SET_LEVELS, SET_LEVELS_FAILED, SET_LEVELS_SUCCESS} from "../utils/level-utils";

const levelReducer = (state = {status: null,levels:[]}, action) => {
    switch (action.type) {
        case SET_LEVELS:
            return {
                status:'SUCCESS',
                levels: action.payload,
            }
        default:
            return state
    }
}
export default levelReducer