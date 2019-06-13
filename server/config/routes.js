var task = require('../controllers/controllers');


module.exports = function(app){
    app.get('/tasks', function(req, res){
        task.index(req,res);
        })
    app.get('/tasks/:id', function(req,res){
        task.show(req,res);
    })
    app.post('/tasks/new', function(req,res){
        task.new(req,res);
    })
    app.put('/tasks/edit/:id', function(req,res){
        task.edit(req,res)
    })
    app.delete('/tasks/destroy/:id', function(req,res){
        task.delete(req,res);
    })
      
      
}