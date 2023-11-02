const chatBody = document.getElementById('chat-body');
const chatHeader = document.getElementById("chat-header");
const userInput = document.getElementById('user-input');

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


function processUserInput() {
	const message = userInput.value.trim();
	if (message === '') {
		return; 
	}

	addUserMessage(message);
	userInput.value = '';

	// const formData = new FormData();
	// formData.append('userInput', message);

	fetch("http://192.168.2.172:1880/chat", {
		method: 'POST',
		body: message
	})
		.then(response => response.json())
		.then(data => {
			console.log(data)
			const botMessage = data.botMessage;
			addBotMessage(botMessage);
		})
		.catch(error => {
			console.error('Error:', error);
		});
}

userInput.addEventListener('keydown', (event) => {
	if (event.keyCode === 13) {
		event.preventDefault(); 
		processUserInput();
		document.getElementById("user-input").value = '';
	}
});









