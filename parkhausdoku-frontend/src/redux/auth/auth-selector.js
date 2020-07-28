const jwtDecode = require('jwt-decode');


export function isUserAuthenticated(state) {
    if(state.auth.status === 'SUCCESS'){
        return isJwtTokenValid(state)
    }
    return false
}
export function getAuthToken(state) {
    return state.auth.token
}

export function isJwtTokenValid(state){
    const token = getAuthToken(state)
    if(!token){
        return false
    }
    const decodedToken = jwtDecode(token)
    return new Date().getTime() / 1000 < decodedToken.exp
}