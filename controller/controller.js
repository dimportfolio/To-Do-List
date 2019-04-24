const express = require("express");

const router = express.Router();

const model = require("../model/model.js");

router.get("/", function(req, res){
    model.read(function(result) {
        var object = {
            tasks: result
        }
        console.log(object);
        res.render("index", object);
    });
});

router.post("/api/tasks", function(req, res){

    model.create([
        "task", "status" 
    ], [
        req.body.task, req.body.status
    ], function(result){
        res.json({id: result.insertId});
    });
});

router.put("/api/tasks/:id", function(req, res) {
    var condition = `id = ${req.params.id}`

    console.log("condition", condition);

    model.update({
        status: req.body.status
    }, condition, function(result) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
          } else {
            res.status(200).end();
          }
    });
});

router.delete("/api/tasks/:id", function(req, res) {
    var condition = `id = ${req.params.id}`
  
    model.delete(condition, function(result) {
      if (result.affectedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });

module.exports = router;