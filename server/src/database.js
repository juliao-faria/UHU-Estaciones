const { Pool, Client } = require("pg")

const pool = new Pool({
    user: 'postgres',
    database: 'nyc',
    password: '1234',
    port: 5432,
})

module.exports =pool;
