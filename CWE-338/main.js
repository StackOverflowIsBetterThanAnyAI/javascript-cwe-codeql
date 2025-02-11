const main = () => {
    let password = ''
    for (let i = 0; i < 8; i++) {
        password += Math.floor(Math.random() * 10)
    }
    return password
}
