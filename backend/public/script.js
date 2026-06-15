const chatBox = document.getElementById("chat-box");
const input = document.getElementById("user-input");
const typingIndicator = document.getElementById("typing-indicator");

async function sendMessage() {

    const message = input.value.trim();

    if (!message) return;

    addMessage(message, "user");

    input.value = "";

    typingIndicator.style.display = "block";

    try {

        const response = await fetch("http://localhost:3000/chat", {

            method: "POST",

            headers: {
                "Content-Type": "application/json",
            },

            body: JSON.stringify({
                message: message,
            }),

        });

        const data = await response.json();

        typingIndicator.style.display = "none";

        addMessage(data.reply, "assistant");

    }

    catch (error) {

        typingIndicator.style.display = "none";

        addMessage(
            "Sorry, I couldn't connect to the server.",
            "assistant"
        );

    }

}

function addMessage(text, sender) {

    const div = document.createElement("div");

    div.classList.add("message");

    if (sender === "user") {

        div.classList.add("user-message");

        div.innerHTML = `<strong>You:</strong><br>${text}`;

    }

    else {

        div.classList.add("assistant-message");

        div.innerHTML = `<strong>Assistant:</strong><br>${text}`;

    }

    chatBox.appendChild(div);

    chatBox.scrollTop = chatBox.scrollHeight;

}

function clearChat() {

    chatBox.innerHTML = `

        <div class="message assistant-message">
            👋 Chat cleared! How can I help you today?
        </div>

    `;

}

input.addEventListener("keypress", function(event) {

    if (event.key === "Enter") {

        sendMessage();

    }

});