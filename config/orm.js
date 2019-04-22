const connection = require("./connection.js");

// create a task to do in the sql table 
// read or get a task to do in the sql table
// delete a task in the sql table

var orm = {
    create: function(selector,cb){
        let query = `INSERT INTO todo SET task = ${selector}`
        connection.query(query, function(err,data){
            if (err) throw err;
            // console.log(data);
            cb(data);
        })
    },

    read: function(){
        let query = `SELECT * FROM todo;`
        connection.query(query, function(err,data){
            if (err) { throw err };
            console.log(data);
        })
    },

    delete: function(selector){
        let query = `DELETE FROM todo WHERE task = ${selector}`
        connection.query(query, function(err,data){
            if (err) throw err;
            console.log(data);
        })
    }
}
orm.read();
module.exports = orm;