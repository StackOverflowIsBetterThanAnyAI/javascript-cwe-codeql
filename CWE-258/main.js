const dbConfig = {
    host: 'localhost',
    user: 'admin',
    password: '',
}

const main = (user, password) => {
    return user === dbConfig.user && password === dbConfig.password
}
