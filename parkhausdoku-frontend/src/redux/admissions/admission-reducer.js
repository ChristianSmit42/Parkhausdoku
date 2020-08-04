import {
    DELETE_ADMISSION_SUCCESS,
} from "../utils/admission-utils";

const admissionReducer = (state = {status: null, items: []}, action) => {
    switch (action.type) {
        case DELETE_ADMISSION_SUCCESS:
            return {
                status: 'SUCCESS', items: state.items.filter((admission) => {
                    return admission.id !== action.payload
                })
            }
        default:
            return state
    }
}
export default admissionReducer