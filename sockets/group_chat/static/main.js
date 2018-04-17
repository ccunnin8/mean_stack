$(document).ready(function(){
  //global variables

  var new_user = prompt("Welcome to the chatboard, what is your name?");
  var chat_box = $(".messages");
  var socket = io.connect();
  //local actions
  add_new_user(new_user);

  $("button").on("click",add_new_message);

  //notifications from server
  socket.on("new_message_server",function(data){
      var msg = new_message(data.name + ": " + data.message);
      chat_box.append(msg);
  });

  socket.on("new_user_server",function(data){
    var msg = new_message(data.name + " has joined the chat");
    chat_box.append(msg);
  });

  //helper functions
  function new_message(text){
    return ("<p class='message'>" + text + "</p>");
  };

  //functions to handle actions
  function add_new_user(){
    var msg = new_message(new_user + " has joined the chat!");
    chat_box.append(msg);
    socket.emit("new_user",{ name: new_user });
  }

  function add_new_message(){
    var msg = new_message(new_user + ": " + $("input").val());
    chat_box.append(msg);
    socket.emit("new_message", { name: new_user, message: text })
  }
});
