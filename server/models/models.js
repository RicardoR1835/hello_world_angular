var mongoose = require('mongoose');

//Below is example create a schema
var TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        default: "Fight Billybob",
    },
    description: {
        type: String,
        default: "",
    },
    completed: {
        type: Boolean,
        default: false,
    },
}, {
    timestamps: true
});
mongoose.model('Task', TaskSchema);
var Task = mongoose.model('Task');
mongoose.Promise = global.Promise;

