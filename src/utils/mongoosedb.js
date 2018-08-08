var mongoose = require('mongoose')

module.exports = (app) => {
    //mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://mevn_user:mevn123<dbpassword>@ds115442.mlab.com:15442/mevn_db' || 'mongodb://localhost:27017/mevn');
    mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://mevn_user:mevn123@ds115442.mlab.com:15442/mevn_db');
    var db = mongoose.connection;
    db.on("error", console.error.bind(console, "connection error"));
    db.once("open", function(callback){
        console.log("Connection Succeeded");
    });
}