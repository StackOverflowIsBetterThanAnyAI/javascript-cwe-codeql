const main = () => {
    const password = sessionStorage.getItem('vulnerable')
    sessionStorage.setItem('vulnerable', password)

    console.log(`password: ${password}`)
}
