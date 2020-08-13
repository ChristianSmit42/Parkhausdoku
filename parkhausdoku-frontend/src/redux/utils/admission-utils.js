import {serverUrl} from "../redux-config";

export const DELETE_ADMISSION = 'DELETE_ADMISSION';
export const DELETE_ADMISSION_SUCCESS = 'DELETE_ADMISSION_SUCCESS';
export const DELETE_ADMISSION_FAILED = 'DELETE_ADMISSION_FAILED';

export const ADD_ADMISSION = 'ADD_ADMISSION';
export const ADD_ADMISSION_SUCCESS = 'ADD_ADMISSION_SUCCESS';
export const ADD_ADMISSION_FAILED = 'ADD_ADMISSION_FAILED';


export async function deleteAdmissionById(token, admissionId, buildingId, levelId) {
    const response = await fetch(`${serverUrl}/api/building/${buildingId}/${levelId}/admission/${admissionId}`,
        {
            method: "DELETE",
            headers: {
                'Authorization': `Bearer ${token}`
            },
        });
    if (response.status !== 200) {
        throw new Error(response.statusText);
    }
}

export async function addNewAdmission(token, information, buildingId, levelId) {
    const response = await fetch(`${serverUrl}/api/building/${buildingId}/${levelId}/admission/`,
        {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                information,
                levelId,
                buildingId,
            }),
        });
    if (response.status !== 200) {
        throw new Error(response.statusText);
    }
    return response.json();
}