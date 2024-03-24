import mysql, { createConnection } from 'mysql'

const conn = createConnection({
    host : "localhost",
    user : "root",
    password : "",
    database : "partnerpro",
})

conn.connect(function(err) {
    if(err => console.log("connection failed"))
    return console.log("Connected")
})

export default conn;