const connection = require("connection");

// create a task to do in the sql table 
// read or get a task to do in the sql table
// delete a task in the sql table

var orm = {
    create: function(){
        connection.query("INSERT INTO tasks SET toDo = ?", [], function(err,data){
            if (err) throw err;
            console.log("this is the create function logging " + data);
        })
    },

    read: function(){
        connection.query("SELECT * FROM tasks", function(err,data){
            if (err) throw err;
            console.log("this is the read function logging " + data);
        })
    },

    delete: function(){
        connection.query("DELETE FROM tasks WHERE toDo = ?", [], function(err,data){
            if (err) throw err;
            console.log("this is the delete function logging " + data);
        })
    }
}

module.exports = orm;