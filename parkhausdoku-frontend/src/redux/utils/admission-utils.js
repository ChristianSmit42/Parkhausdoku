import {serverUrl} from "../redux-config";

export const DELETE_ADMISSION = 'DELETE_ADMISSION';
export const DELETE_ADMISSION_SUCCESS = 'DELETE_ADMISSION_SUCCESS';
export const DELETE_ADMISSION_FAILED = 'DELETE_ADMISSION_FAILED';

export const ADD_ADMISSION = 'ADD_ADMISSION';
export const ADD_ADMISSION_SUCCESS = 'ADD_ADMISSION_SUCCESS';
export const ADD_ADMISSION_FAILED = 'ADD_ADMISSION_FAILED';


export async function deleteAdmissionById(token, admissionId, buildingId,levelId) {
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

export async function addAdmission(token,admissionDto) {
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