const mysql = require('mysql')
const config = require('./../../config')
const dbConfig = require(config.database)

const pool = mysql.createPool({
    host    :dbConfig.HOST
})