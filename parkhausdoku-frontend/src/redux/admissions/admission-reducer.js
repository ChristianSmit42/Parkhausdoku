import {LOAD_ADMISSIONS, LOAD_ADMISSIONS_FAILED, LOAD_ADMISSIONS_SUCCESS} from "../utils/admission-utils";

const admissionReducer = (state = {status: null, items:[]},action)=>{
    switch (action.type) {
        case LOAD_ADMISSIONS:
            return {status: 'PENDING'}
        case LOAD_ADMISSIONS_SUCCESS:
            return {status: 'PENDING', items: action.payload}
        case LOAD_ADMISSIONS_FAILED:
            return {status: 'FAILED'}

        default:
            return state
    }
}
export default admissionReducer