const DB_PASSWORD = 'password1234'

const main = () => {
    const dbConfig = {
        host: 'localhost',
        user: 'admin',
        password: DB_PASSWORD,
    }

    connectToDataBase(dbConfig)
}

const connectToDataBase = (dbConfig) => {
    console.log(`Connecting with ${dbConfig}`)
}
