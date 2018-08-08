const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')


const app = express()
const http = require('http').Server(app);
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

require('./routes')(app)
require('./utils/mongoosedb')(app)


var server = app.listen(process.env.PORT || 3000, () => {
  console.log("Listening ..", process.env.PORT);
});

require('./utils/socket/socketio')(server)
app.get('/socketexample', function(req, res){
  res.sendFile(__dirname + '/utils/socket/socket-example.html');
});




