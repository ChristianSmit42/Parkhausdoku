
import {SET_LEVELS} from "../utils/level-utils";
import {DELETE_ADMISSION_SUCCESS} from "../utils/admission-utils";

const levelReducer = (state = {status: null,levels:[]}, action) => {
    switch (action.type) {
        case SET_LEVELS:
            return {
                status:'SUCCESS',
                levels: action.payload,
            }
        case DELETE_ADMISSION_SUCCESS:
            return {
                status:'SUCCESS',
                levels: state.levels[payload.levelIndex].admissions.filter((admission)=>{
                    return admission.id !== action.payload.admissionId
                })
            }
        default:
            return state
    }
}
export default levelReducer