const main = () => {
    const credentials = {
        user: 'admin',
        password: 'password1234',
    }

    localStorage.setItem('storedPassword', credentials.password)
}
