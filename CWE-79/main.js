const main = () => {
    const name = new URLSearchParams(window.location.search).get('name')
    document.getElementById('greeting').innerHTML = `Hello ${name}`
}
