import knex from 'knex';





const connection = knex({
    client: 'mssql',
    connection: {  
        user: 'sa',  
        password: 'ituran',  
        server:'localhost',  
        database: 'APPITURAN',
        port: 1433,
    },  
    useNullAsDefault: true,
});

export default connection;