const main = (html) => {
    const regex = /<script\b[^>]*>([\s\S]*?)<\/script>/gi

    if (regex.test(html)) {
        document.body.innerHTML = html
    }
}
