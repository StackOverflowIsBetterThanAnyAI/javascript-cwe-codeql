const main = (key, value) => {
    const storage = sessionStorage.getItem('vulnerable')
    const item = storage ? JSON.parse(storage) : {}
    item[key] = value
    sessionStorage.setItem('vulnerable', JSON.stringify(item))
}
