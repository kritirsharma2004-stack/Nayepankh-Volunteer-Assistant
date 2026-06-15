const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const fs = require("fs");
const { GoogleGenAI } = require("@google/genai");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Gemini setup
const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
});

// Load knowledge base
const knowledgeBase = JSON.parse(
    fs.readFileSync("./knowledgeBase.json", "utf8")
);

// Memory storage
const memory = require("./memory");

// Chat endpoint
app.post("/chat", async (req, res) => {
    try {
        const userMessage = req.body.message.toLowerCase();
        const sessionId = "default";

        // Initialize memory for the session
        if (!memory[sessionId]) {
            memory[sessionId] = {};
        }

        // Volunteer recommendation workflow
        if (userMessage.includes("i want to volunteer")) {
            memory[sessionId].step = "interest";

            return res.json({
                reply:
                    "That's wonderful! What interests you the most?\n\n1. Education\n2. Awareness Campaigns\n3. Fundraising\n4. Event Management\n5. Content Creation"
            });
        }

        // Collect interest
        if (memory[sessionId].step === "interest") {
            memory[sessionId].interest = userMessage;
            memory[sessionId].step = "hours";

            return res.json({
                reply:
                    "Great! Approximately how many hours per week can you contribute?"
            });
        }

        // Collect availability and recommend roles
        if (memory[sessionId].step === "hours") {
            memory[sessionId].hours = userMessage;

            const interest = memory[sessionId].interest;

            memory[sessionId].step = null;

            return res.json({
                reply: `Based on your interest in "${interest}" and your availability of ${userMessage}, we recommend exploring NayePankh's related volunteer opportunities. Thank you for your willingness to contribute!`
            });
        }

        // Check knowledge base
        for (const item of knowledgeBase) {
            const matched = item.keywords.some(keyword =>
                userMessage.includes(keyword)
            );

            if (matched) {
                return res.json({
                    reply: item.answer
                });
            }
        }

        // Gemini fallback
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: `You are the NayePankh Volunteer Assistant. Answer professionally, encourage volunteering and social impact, and keep responses concise.

User: ${userMessage}`
        });

        res.json({
            reply: response.text
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            reply: "Sorry, something went wrong."
        });
    }
});

// Start server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});