import {
    DELETE_ADMISSION_SUCCESS,
    LOAD_ADMISSIONS,
    LOAD_ADMISSIONS_FAILED,
    LOAD_ADMISSIONS_SUCCESS
} from "../utils/admission-utils";

const admissionReducer = (state = {status: null, items: []}, action) => {
    switch (action.type) {
        case LOAD_ADMISSIONS:
            return {status: 'PENDING'}
        case LOAD_ADMISSIONS_SUCCESS:
            return {status: 'SUCCESS', items: action.payload}
        case LOAD_ADMISSIONS_FAILED:
            return {status: 'FAILED'}
        case DELETE_ADMISSION_SUCCESS:
            return {
                status: 'SUCCESS', items: state.items.filter((admission) => {
                    return admission.id !== "2"
                })
            }
        default:
            return state
    }
}
export default admissionReducer