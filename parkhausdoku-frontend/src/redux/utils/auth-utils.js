import {serverUrl} from "../redux-config";

export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const LOGOUT = 'LOGOUT';

export async function performLogin(username, password) {
    const response = await fetch(serverUrl + "/auth/login", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({username, password})
    });

    if (response.status !== 200) {
        throw new Error(`failed to login: ${response.statusText}`)
    }

    return await response.text()
}