const orm = require("../config/orm.js");

let model = {
    create: function(selector,cb){
        orm.create(selector,function(res){
            cb(res)
        });
    },

}