const main = () => {
    const newPage = window.open(
        'http://malicious-site.example.com/malicious-page.html',
        '_blank'
    )
    return newPage
}
