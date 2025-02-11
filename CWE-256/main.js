const main = async () => {
    const user = { username: 'admin', password: 'password1234' }

    const response = await fetch('/api', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: user }),
    })

    return response.json()
}
