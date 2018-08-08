var mongoose = require('mongoose')

module.exports = (app) => {
    mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost:27017/mevn');
    var db = mongoose.connection;
    db.on("error", console.error.bind(console, "connection error"));
    db.once("open", function(callback){
        console.log("Connection Succeeded");
    });
}