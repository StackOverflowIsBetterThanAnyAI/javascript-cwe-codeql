const main = async () => {
    const response = await fetch('/api', {
        method: 'GET',
    })

    const result = await response.json()

    for (let i = 0; i < result.length; i++) {
        console.log('Potential Denial of Service attack.')
    }

    return result
}
