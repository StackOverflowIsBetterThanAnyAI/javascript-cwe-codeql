const main = (html) => {
    const scriptRegex = /<script\b[^>]*>([\s\S]*?)<\/script>/gi
    let match

    while ((match = scriptRegex.exec(html)) !== null) {
        html = html.replace(match[0], match[1])
    }

    return html
}
