const {Client} = require('pg')

const client = new Client(process.env.POSTGRE)
/* const client = new Client({
    host:"localhost",
    user:"postgres",
    port:"5432",
    password:"dashboard",
    database:"factory"
}) */

client.connect(()=>{
    console.log('PostgreSQL connected successfully')
})

module.exports = client