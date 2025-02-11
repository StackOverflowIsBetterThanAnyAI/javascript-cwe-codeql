const main = async () => {
    const response = await fetch('/api', (req, res) => {
        const result = req.body

        for (let i = 0; i < result.length; i++) {
            console.log('Potential Denial of Service attack.')
        }
    })

    return response.json()
}
