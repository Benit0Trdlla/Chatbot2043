const chatBody = document.getElementById('chat-body');
const userInput = document.getElementById('user-input');
// const chatHeader = document.getElementById("chat-header");


const URL = window.location.origin;

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

const botText1 = "¡Hola! Soy un bot de asistencia tecnica para el Laboratorio Consultar. ¿Que puedo hacer para ayudarte?";
addBotMessage(botText1);



function processUserInput() {
	const message = userInput.value.trim();
	if (message === '') {
		return; // Evita enviar una solicitud vacía
	}

	addUserMessage(message);
	userInput.value = '';

	const formData = new FormData();
	formData.append('userInput', message);

	fetch('/process', {
		method: 'POST',
		body: formData
	})
		.then(response => response.json())
		.then(data => {
			const botMessage = data.botMessage;

			addBotMessage(botMessage);
		})
		.catch(error => {
			console.error('Error:', error);
		});
}



















