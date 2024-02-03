var express = require('express');
var app = express();
var fs = require("fs");
var io = require('socket.io-client');

var socket = io('https://blindspace.onrender.com');

app.get('/click/:id', function (req, res) {
  console.log(req.params.id)
  socket.emit("click", req.params.id)
  res.send("Done"); 
})

// var server = app.listen(3000, function () {
//    var host = server.address().address
//    var port = server.address().port
//    console.log("Example app listening at http://%s:%s", host, port)
// })


// console.log("HEWO")

  socket.on("connect", function(){
      console.log("CONNECTED")
      socket.emit("connectbtn8")
      console.log(socket.id)
  });

const PORT = process.env.PORT || 80; 

// For testing purposes 
app.get("/", (req, res) => { 
    res.send("<h2>It's Working!</h2>"); 
  console.log("recieved")
}); 

app.listen(PORT, () => { 
    console.log(`API is listening on port ${PORT}`); 
});
  
