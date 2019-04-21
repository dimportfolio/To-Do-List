const mysql = require("mysql");

let connection = mysql.createConnection(
    host = "localhost",
    user = "root",
    PORT = 3306,
    password = "",
    database = "toDoListDB"
)

connection.connect(function(err){
    if (err) throw err;

    console.log("connection was successful " + connection.threadId);
})

module.exports = connection;