var mongoose = require('mongoose')
var Schema = mongoose.Schema

var UserSchema = new Schema({
	email: {
		type:String,
		unique:true,
		required:true,
		trim:true
	},
	password: {
		type:String,
		required:true,
		trim:true
	}
})

var user = mongoose.model("User", UserSchema)
module.exports = user

