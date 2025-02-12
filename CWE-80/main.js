const main = (html) => {
    const regex = /<script>.*<\/script>/gi

    if (regex.test(html)) {
        document.body.innerHTML = html
    }
}
