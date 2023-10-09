const chatBody = document.getElementById("chat-body");
const userInput = document.getElementById("userInput");
const sendButton = document.getElementById("send");

function addUserMessage(message) {
  const userMessage = document.createElement("div");
  userMessage.classList.add("bg-secondary", "chat", "chat-bubble", "chat-end");
  userMessage.textContent = message;
  chatBody.appendChild(userMessage);
}

function addBotMessage(message) {
  const botMessage = document.createElement("div");
  botMessage.classList.add("bg-secondary", "chat", "chat-bubble", "chat-start");
  botMessage.textContent = message;
  chatBody.appendChild(botMessage);
}

const botText1 =
  "¡Hola! Soy un bot de asistencia. ¿Qué puedo hacer para ayudarte?";
addBotMessage(botText1);

function handleSendMessage() {
  const userMessage = userInput.value.trim();

  if (userMessage !== "") {
    addUserMessage(userMessage);
    console.log(userMessage);
    userInput.value = "";

    fetch("http://localhost:1880/sexo", {
      method: "POST",
      body: JSON.stringify(userMessage),
    })
      .then((response) => response.json())
      .then((data) => {
        const botMessage = data.botMessage;

        addBotMessage(botMessage);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  //   const formData = new FormData();
  //   formData.append("userInput", message);

  //ACA SE TIENE QUE HACER EL FECTH.
}

sendButton.addEventListener("click", function (event) {
  event.preventDefault();
  handleSendMessage();
});

userInput.addEventListener("keydown", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    handleSendMessage();
  }
});
