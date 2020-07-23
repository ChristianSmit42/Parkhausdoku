export function isUserAuthenticated(state) {
    return state.auth.status === 'SUCCESS'
}
export function getAuthToken(state) {
    return state.auth.token
}