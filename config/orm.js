const connection = require("connection");

// create a task to do in the sql table 
// read or get a task to do in the sql table
// delete a task in the sql table

var orm = {
    create: function(){
        connection.query("INSERT INTO tasks SET toDo = ?", [], function(err,data){
            if(err) throw err;
            console.log("this is the create function logging " + data);
        })
    }
}