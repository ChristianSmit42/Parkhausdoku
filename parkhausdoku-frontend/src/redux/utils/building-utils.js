import {serverUrl} from "../redux-config";

export const LOAD_BUILDINGS = 'LOAD_BUILDINGS';
export const LOAD_BUILDINGS_SUCCESS = 'LOAD_BUILDINGS_SUCCESS';
export const LOAD_BUILDINGS_FAILED = 'LOAD_BUILDINGS_FAILED';

export async function fetchAllOwnedBuildings(token, ownerId) {

    const response = await fetch(`${serverUrl}/api/building/${ownerId}`,
        {
            method: "GET",
            headers: {
                'Authorization': `Bearer ${token}`
            },
        });
    if (response.status !== 200) {
        console.log(response.status)
        throw new Error(response.statusText);
    }

    return await response.json();
}