const main = () => {
    const token = Math.random().toString(36).slice(2)
    return token
}

console.log('Generated insecure reset token:', main())
