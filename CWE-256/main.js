const main = () => {
    const user = { username: 'admin', password: 'password1234' }

    fetch('/api', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: user }),
    })

    return null
}
