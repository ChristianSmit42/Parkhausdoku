
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
            const levelToUpdate = state.levels.find((level)=> level.id === action.payload.levelId);
            const updatedLevel = {
                ...levelToUpdate,
                admissions: levelToUpdate.admissions.filter((admission)=> admission.id !== action.payload.admissionId)}

            const updatedLevels = state.levels.filter((level)=> level.id !== action.payload.levelId);
            updatedLevels.push(updatedLevel);
            return {...state, levels:updatedLevels.sort((l1,l2)=> l1.level-l2.level)}
        default:
            return state
    }
}
export default levelReducer