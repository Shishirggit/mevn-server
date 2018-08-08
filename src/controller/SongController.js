const Song = require('../models/song')

module.exports = {
    addSong (req, res) {
        var db = req.db;
        var {title, artist, genre, album} = req.body;
        var new_song = new Song ({
                title: title,
                artist: artist, 
                genre: genre, 
                album: album
            })
        console.log(new_song.title)

        new_song.save(function (error) {
            if (error) {
                res.status(400).send({
                    error:'song cannot be created' + error.message
                })
            }else {
                res.send({
                    success: true,
                    message: 'song created successfully!'
                })
            }     
        })
    },
    getSongs (req, res) {
        
        Song.find({}, '_id title artist genre album', function (error, songs) {
            
            if (error) { 
                res.status(400).send({
                    error:'Some error occured. Please try again'
                }) 
            }
            console.log(songs)
            if(!songs){
                res.status(403).send({
                    error:'No songs found'
                })
            } else {
                res.send({
                    songs: songs
                })
            }
        }).sort({_id:-1}) 
    },
    viewSong (req, res) {
        Song.findOne({_id: req.query._id}, 'title artist genre album', function (error, song) {
            
            if (error) { 
                res.status(400).send({
                    error:'Some error occured. Please try again'
                }) 
            }
            console.log(song)
            if(!song){
                res.status(403).send({
                    error:'No song found'
                })
            } else {
                res.send({
                    song: song
                })
            }
        })
    },
    editSong (req, res) {
        var db = req.db;
        var {_id, title, artist, genre, album} = req.body;
        var edit_song = new Song ({
                id: _id,
                title: title,
                artist: artist, 
                genre: genre, 
                album: album
            })
        console.log(edit_song.title)

        edit_song.save(function (error) {
            if (error) {
                res.status(400).send({
                    error:'song cannot be edited' + error.message
                })
            }else {
                res.send({
                    success: true,
                    message: 'song edited successfully!'
                })
            }     
        })
    }
}