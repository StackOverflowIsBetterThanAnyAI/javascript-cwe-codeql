const main = (username, password) => {
    console.log(`user: ${username}, password: ${password}`)

    localStorage.setItem('storedPassword', password)
}
