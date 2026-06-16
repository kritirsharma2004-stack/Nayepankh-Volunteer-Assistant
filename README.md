# NayePankh Volunteer Assistant 🤝✨

An AI-powered Volunteer Assistant developed for the **NayePankh Foundation Artificial Intelligence Internship Assignment**. The application is designed to enhance volunteer engagement by providing instant responses to common queries, recommending volunteering opportunities, and leveraging generative AI for open-ended interactions.

## 🌟 Features

* **Knowledge-Based Responses**

  * Answers frequently asked questions about NayePankh Foundation.
  * Provides information about initiatives, volunteering opportunities, and skill development.

* **Volunteer Recommendation Workflow**

  * Guides users through a multi-step conversation.
  * Collects interests and availability to recommend suitable volunteering opportunities.

* **AI-Powered Assistance**

  * Integrates Google's Gemini API to handle open-ended questions related to volunteering, leadership, and social impact.

* **Session Memory**

  * Maintains conversational context during the volunteer recommendation process.

* **Responsive NGO-Themed User Interface**

  * Clean and professional design optimized for desktop and mobile devices.

* **Cloud Deployment**

  * Deployed using Render for easy accessibility.

---

## 🛠️ Tech Stack

### Frontend

* HTML
* CSS
* JavaScript

### Backend

* Node.js
* Express.js

### AI Integration

* Google Gemini API (`@google/genai`)

### Deployment & Version Control

* Render
* Git & GitHub

---

## 📂 Project Structure

```
Nayepankh-Volunteer-Assistant/
│
├── backend/
│   ├── public/
│   │   ├── index.html
│   │   ├── style.css
│   │   └── script.js
│   ├── knowledgeBase.json
│   ├── memory.js
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── README.md
└── demo-video.mp4
```

---

## ⚙️ Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/kritirsharma2004-stack/Nayepankh-Volunteer-Assistant.git
cd Nayepankh-Volunteer-Assistant/backend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the backend directory and add:

```
GEMINI_API_KEY=your_gemini_api_key
```

### 4. Run the Application

```bash
node server.js
```

The application will be available at:

```
http://localhost:3000
```

---

## 🚀 Live Demo

Deployed Application:

https://nayepankh-volunteer-assistant.onrender.com

> Note: The application is hosted on Render's free tier. The first request after inactivity may take a few seconds while the service wakes up.

---

## 📌 Future Enhancements

* Voice-enabled interactions
* Multilingual support
* WhatsApp integration
* Volunteer analytics dashboard
* Enhanced retrieval mechanisms for improved accuracy
* Persistent user memory using databases

---

## 📸 Demonstration

The project demonstration video showcases:

* Knowledge-based responses
* Volunteer recommendation workflow
* Gemini-powered interactions
* Responsive user interface
* Live deployment

---

## 🎯 Project Objective

The primary objective of this project is to demonstrate how Artificial Intelligence can support NGOs by improving accessibility to information, streamlining volunteer engagement, and enhancing the overall user experience.

---

## 👩‍💻 Author

**Kriti Sharma**

Third-Year Computer Science Engineering Student

GitHub: https://github.com/kritirsharma2004-stack

---

## 📜 Disclaimer

This project was developed as part of the NayePankh Foundation Artificial Intelligence Internship assignment. The generative AI component may occasionally produce inaccurate responses for organization-specific queries. Critical information should be verified through official NayePankh Foundation channels.
