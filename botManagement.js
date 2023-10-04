const chatBody = document.getElementById('chat-body');
const userInput = document.getElementById('userInput');
const sendButton = document.getElementById('send');

function addUserMessage(message) {
    const userMessage = document.createElement('div');
    userMessage.classList.add('message', 'user-message');
    userMessage.textContent = message;
    chatBody.appendChild(userMessage);
}

function addBotMessage(message) {
    const botMessage = document.createElement('div');
    botMessage.classList.add('message', 'bot-message');
    botMessage.textContent = message;
    chatBody.appendChild(botMessage);
}

const botText1 = "¡Hola! Soy un bot de asistencia. ¿Qué puedo hacer para ayudarte?";
addBotMessage(botText1);

function handleSendMessage() {
    const userMessage = userInput.value.trim();

    if (userMessage !== '') {
        addUserMessage(userMessage);
        console.log(userMessage);
        userInput.value = ''; 
    }
    alert('4kt');

    //ACA SE TIENE QUE HACER EL FECTH.
}

sendButton.addEventListener('click', function (event) {
    event.preventDefault();
    handleSendMessage();
});

userInput.addEventListener('keydown', function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        handleSendMessage();
    }
});