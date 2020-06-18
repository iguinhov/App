import path from 'path';


module.exports = {
    client: 'mssql',
    connection: {  
        user: 'sa',  
        password: 'ituran',  
        server: 'localhost',  
        database: 'APPITURAN',
        port: 1433
       },  
    migrations: {
        directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    },
    useNullasDefault: true,

};