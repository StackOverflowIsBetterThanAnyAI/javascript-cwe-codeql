const main = () => {
    const expression = decodeURIComponent(window.location.hash.slice(1))
    return eval(expression)
}
