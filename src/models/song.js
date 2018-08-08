var mongoose = require('mongoose')
var Schema = mongoose.Schema

var SongScehema = new Schema({
	title: {
		type:String,
		required:true,
		trim:true
    },
  artist: {
		type:String,
		required:true,
		trim:true
    },
	genre: {
		type:String,
		trim:true
    },
  album: {
		type:String,
		required:true,
		trim:true
    },
  albumImage: {
		type:String,
		trim:true
    },
})

var song = mongoose.model("Song", SongScehema)
module.exports = song

