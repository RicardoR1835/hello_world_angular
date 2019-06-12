var mongoose = require('mongoose');
require('../models/models.js');

var Quote = mongoose.model('DATANAME'); //Any name is okay

module.exports={
    index: function(req, res){
        res.render('index');
    },
}