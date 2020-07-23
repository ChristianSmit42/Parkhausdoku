const authReducer = (state = {status: undefined}, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {status: 'PENDING'}
        case 'LOGIN_SUCCESS':
            return {status: 'SUCCESS', token: action.payload.token}
        case 'LOGIN_FAILED':
            return {status: 'FAILED'}
        case 'LOGOUT':
            return {status: undefined}
        default:
            return state
    }
}

export default authReducer