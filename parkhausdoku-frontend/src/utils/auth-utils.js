export async function performLogin(username, password) {
    const serverUrl = "http://192.168.178.68:8080";
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