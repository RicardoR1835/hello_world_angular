var mongoose = require('mongoose');

//Below is example create a schema
var QuoteSchema = new mongoose.Schema({
    name: { type: String, required: 'Your name must be longer than 2 characters', trim: true, minlength: 2},
    quote: { type: String, required: 'Quote must be longer than 10 characters', trim: true, minlength: 10 },
},{ timestamps: true })

mongoose.model('DATANAME', QuoteSchema); // 'DATANAME' , matching DATANAME you set in controllers.js