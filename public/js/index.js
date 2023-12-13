const socket = io();

let user;
const chatBox = document.getElementById('chatBox');

Swal.fire({
    title: 'Indentifate',
    text: 'Ingresa el usuario para identificarte en el chat',
    input: 'text',
    inputValidator: (value) => {
        return !value && 'Necesitas escribir un usuario para continuar';
    },
    allowOutsideClick: false
}).then(result => {
    user = result.value;
    socket.emit('newUser', `Ha ingresado un nuevo usuario`);
    socket.emit('user_new', `El usuario ${user} se ha autenticado`)
});

chatBox.addEventListener('keyup', event => {
    if(event.key === 'Enter'){
        if(chatBox.value.trim().length > 0){
            socket.emit('message', {user: user, message: chatBox.value});
        }
    }
});

socket.on('logMessages', data => {
    const log = document.getElementById('messageBox');
    let messages = "";
    data.forEach(message => {
        messages += `${message.user} dice: ${message.message} </br>`
    });
    log.innerHTML = messages;
});

socket.on('newUserFound', data => {
    console.log(data);
});

socket.on('newConnection', data => {
    Swal.fire({
        text: data,
        toast: true,
        position: 'top-right'
    })
})