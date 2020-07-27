import {serverUrl} from "../redux-config";

export const LOAD_ADMISSIONS = 'LOAD_ADMISSIONS';
export const LOAD_ADMISSIONS_SUCCESS = 'LOAD_ADMISSIONS_SUCCESS';
export const LOAD_ADMISSIONS_FAILED = 'LOAD_ADMISSIONS_FAILED';

export const DELETE_ADMISSION = 'DELETE_ADMISSION';
export const DELETE_ADMISSION_SUCCESS = 'DELETE_ADMISSION_SUCCESS';
export const DELETE_ADMISSION_FAILED = 'DELETE_ADMISSION_FAILED';

export const ADD_ADMISSION = 'ADD_ADMISSION';
export const ADD_ADMISSION_SUCCESS = 'ADD_ADMISSION_SUCCESS';
export const ADD_ADMISSION_FAILED = 'ADD_ADMISSION_FAILED';


export async function fetchAllAdmissions(token) {
    const response = await fetch(`${serverUrl}/api/admission`,
        {
            method: "GET",
            headers: {
                'Authorization': `Bearer ${token}`
            },
        });
    if (response.status !== 200) {
        throw new Error(response.statusText);
    }
    return await response.json();
}

export async function deleteAdmissionById(token, id) {
    const response = await fetch(`${serverUrl}/api/admission/${id}`,
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