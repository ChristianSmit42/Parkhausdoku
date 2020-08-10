import {
    DELETE_ADMISSION_SUCCESS,
} from "../utils/admission-utils";
import {LOAD_BUILDINGS_FAILED, LOAD_BUILDINGS_SUCCESS} from "../utils/building-utils";

const admissionReducer = (state = {status: null, items: []}, action) => {
    switch (action.type) {

        case LOAD_BUILDINGS_SUCCESS:
            return {status: 'SUCCESS', items: action.payload.admissions}
        case LOAD_BUILDINGS_FAILED:
            return {status: 'FAILED'}
        case DELETE_ADMISSION_SUCCESS:
            return {
                ...state,
                items: state.items.filter((admission)=>{
                    return admission.id !== action.payload.admissionId;
                })
            }
        default:
            return state
    }
}
export default admissionReducer