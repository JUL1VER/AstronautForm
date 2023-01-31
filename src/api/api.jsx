const URL = 'http://localhost:3000/'

export const sendUserLogs = (userLogs) => {
    fetch(URL, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userLogs),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(response.statusText)
                }
                return 'response';
            })
}