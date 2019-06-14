var mongoose = require('mongoose');
require('../models/models.js');

var Task = mongoose.model('Task');

module.exports = {
    index: function (req, res) {
        Task.find({}, function (err, tasks) {
            if (err) {
                console.log("Returned error", err);
                // respond with JSON
                res.json({
                    message: "Error",
                    error: err
                })
            } else {
                // respond with JSON
                res.json({
                    message: "Success",
                    data: tasks
                })
            }
        })
    },
    show: function (req, res) {
        Task.findOne({
            _id: req.params.id
        }, function (err, task) {
            if (err) {
                console.log("something went wrong", err);
            } else {
                console.log("successfully found")
                res.json({
                    message: "Success",
                    data: task
                })
            }
            
        })
    },
    new: function (req,res){
        var task = new Task();
        task.title = req.body.title;
        task.description = req.body.description;
        completed = req.body.completed;
        task.save(function(err, result){
            if(err){
                console.log("something went wrong", err);
            } else {
                console.log("successfully updated")
                res.json({result: result});
            }
        })
    },
    edit: function(req,res){
        console.log("in updating")
        Task.findByIdAndUpdate(req.params.id, {$set: req.body}, function(err,task){
            console.log("***************************");
            console.log(task)
            task.title = req.body.title;
            task.description = req.body.description;
            completed = req.body.completed;
            task.save(function(err,task){
                if(err){
                    console.log("something went wrong", err);
                } else {
                    console.log("successfully updated")
                    res.json({task: task})
                }
            })
        })
    },
    delete: function(req,res){
        console.log("in delete");
        Task.findOne({_id: req.params.id}, function(err, task){
            task.remove(function(err){
                if(err){
                    console.log("something went wrong", err);
                } else {
                    console.log("successfully deleted")
                }
                res.json({message: "Success"})
            })
        })
    }
}