var mongoose = require('mongoose');

//Configuring Mongoose to use the built in promise library 
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};