const orm = require("../config/orm.js");

let model = {
    create: function(cols, vals, cb){
        orm.create("todo", cols, vals, function(res){
            cb(res)
        });
    },
    read: function(cb){
        orm.read("todo", function(res){
            cb(res)
        });
    },
    update: function(objColVals, condition, cb){
        orm.update("todo", objColVals, condition, function(res){
            cb(res)
        });
    },
    delete: function(condition, cb){
        orm.delete("todo", condition, function(res){
            cb(res)
        });
    },

}

module.exports = model;