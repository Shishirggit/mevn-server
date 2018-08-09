var memcache = require('../cache/MemoryCache')
var socketio = require('socket.io')
var events = require('events');
var eventEmitter = new events.EventEmitter();

module.exports = (http) => {
    var io = socketio.listen(http);
    var startTime = new Date().getTime()
    var interval = setInterval(() => {
        memcache.cache(startTime)
        eventEmitter.emit('change');
    }, 240000)

    io.on('connection', function(socket){
        
        console.log('a user connected');
        eventEmitter.on('change', function(){ io.emit('returnStock', memcache.getCache())});
        /* var interval = setInterval(() => {
            io.emit('returnStock', cache(startTime));
        }, 10000) */
        /*  stock.getStock().then((apiData) => {
            io.emit('returnStock', apiData);
        }) */
        socket.on('getStock', function(msg){
            console.log('Server stock time: ' + new Date().getTime()); 
        });
        /*  socket.on('chat message', function(msg){
            console.log('message: ' + msg);
            io.emit('broadcast', msg + ' server');
        }); */
        socket.on('disconnect', function(){
          clearInterval(interval)
          console.log('user disconnected');
        });
    });
}