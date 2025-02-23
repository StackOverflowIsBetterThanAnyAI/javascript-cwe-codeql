const main = () => {
    const password = sessionStorage.getItem('vulnerable')
    sessionStorage.setItem('vulnerable', password)

    console.log(`password: ${password}`)

    console.log(JSON.stringify(process.env))
}
