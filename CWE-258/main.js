const main = () => {
    const dbConfig = {
        host: 'localhost',
        user: 'admin',
        password: '',
    }

    connectToDataBase(dbConfig)
}

const connectToDataBase = (dbConfig) => {
    console.log(`Connecting with ${dbConfig}`)
}
