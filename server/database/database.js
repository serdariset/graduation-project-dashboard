const {Client} = require('pg')

const client = new Client({
    host:"tai.db.elephantsql.com",
    user:"zawnrnno",
    password:"1ejpeRVHmyzfIiAWyY6m29NddV_4EzOT",
    database:"zawnrnno"
})
/* const client = new Client({
    host:"localhost",
    user:"postgres",
    port:"5432",
    password:"dashboard",
    database:"factory"
})
 */
client.connect(()=>{
    console.log('PostgreSQL connected successfully')
})

module.exports = client