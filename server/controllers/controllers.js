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
            }
            res.json({
                message: "Success",
                data: task
            })
        })
    },
    new: function (req,res){
        var task = new Task();
        task.title = req.params.title;
        task.description = req.params.description;
        completed = req.body.completed;
        task.save(function(err){
            if(err){
                console.log("something went wrong", err);
            } else {
                console.log("successfully updated")
                res.redirect('/')
            }
        })
    },
    edit: function(req,res){
        Task.findOne({_id: req.params.id}, function(err,task){
            task.title = req.params.title;
            task.description = req.params.description;
            completed = req.params.completed;
            task.save(function(err){
                if(err){
                    console.log("something went wrong", err);
                } else {
                    console.log("successfully updated")
                    res.redirect('/')
                }
            })
        })
    },
    delete: function(req,res){
        User.findOne({name: req.params.id}, function(err, user){
            user.remove(function(err){
                if(err){
                    console.log("something went wrong", err);
                } else {
                    console.log("successfully deleted")
                }
                res.redirect('/')
            })
        })
    }
}