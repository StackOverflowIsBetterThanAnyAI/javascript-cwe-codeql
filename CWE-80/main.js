const main = (html) => {
    const regex = /<script>.*<\/script>/gi

    return regex.test(html)
}
