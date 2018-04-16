$(document).ready(function(){
  var socket = io.connect();
  var counter = $("#counter");
  var reset = $("#reset");
  var count = $("#count");

  counter.on("click",function(){
    socket.emit("increase_counter");
  });

  reset.on("click",function(){
    socket.emit("reset_counter");
  });

  socket.on("update_counter",function(data){
    count.text(data.counter);
  });
});
