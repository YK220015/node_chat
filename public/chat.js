const URL = "";
const socket = io.connect(URL); 

socket.on('chat_message', (data) => {
    console.log(data);
    var p = document.createElement('p');
    p.innerText = data.socketID + ": " + data.message;
    document.getElementById('chat-list').prepend(p);
})

function sendMessage() {
    var message = document.getElementById('message').value;
    console.log(message);
    if (message) {

        var data = { 
            message: message
        }
        socket.emit('chat_message', data);
    }
}