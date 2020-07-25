export async function fetchAllAdmissions(token) {
        const serverUrl = "http://192.168.178.68:8080";
        const response = await fetch(`${serverUrl}/api/admission`,
            {
                method: "GET",
                headers: {
                    'Authorization': `Bearer ${token}`
                },
            });
        if(response.status !== 200){
        throw new Error(response.statusText);
    }
    return await response.json();
}