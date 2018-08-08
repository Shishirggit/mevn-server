const authController = require('./controller/Authcontroller')
const songController = require('./controller/SongController')
const stockController = require('./controller/StockController')

module.exports = (app) => {
    app.post('/register', authController.register)
    app.post('/login', authController.login)

    app.post('/addSong', songController.addSong)
    app.put('/editSong', songController.editSong)
    app.get('/getSongs', songController.getSongs)
    app.get('/viewSong', songController.viewSong)

    app.get('/stockApi', stockController.getStock)
}