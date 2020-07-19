export async function fetchAllAdmissions() {
    const response = await fetch('http://192.168.178.67:8080/api/admission', {
        method: 'GET',
        headers: {
        },
    });
    if (response.status !== 200) {
        throw new Error(response.statusText);
    }
    return await response.json();
}