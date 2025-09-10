Overview

CleanMela is a smart sanitation and emergency support application designed for Ujjain Mahakumbh 2025.

It empowers devotees to:

Report cleanliness issues instantly

Find nearby clean toilets

Send SOS alerts for emergencies

Get quick answers and guidance through an AI-powered Chatbot Assistant

At the same time, organizers get an Admin Dashboard for real-time monitoring and quick response.

Hackathon Details

Event: Ujjain Mahakumbh Hackathon 2025

Registration Number: TH12089

Theme: Health & Sanitation Management

Project Title: CleanMela – Smart Sanitation & Emergency Support App

Team Members

Hema Rani – Frontend Developer & AI/ML Integration

Aryan Raj – Backend Developer (Node.js, APIs)

Problem Statement

Mahakumbh faces issues such as:

Overflowing bins & unclean toilets

Difficulty finding clean facilities in massive crowds

Delayed emergency medical & police response

Lack of real-time help for pilgrims.

Our Solution – CleanMela

CleanMela bridges the gap between devotees and authorities by providing:

📲 User App → report issues, find toilets, SOS alerts, chatbot assistant.

🖥 Admin Dashboard → monitor issues & emergencies live.

🔗 Direct Connectivity → faster action by doctors, police, and sanitation teams.

Key Features

🔑 Login & Register – Secure access with multilingual support

🚨 Emergency SOS – One-tap alerts to doctors & police with live location

🚻 Toilet Finder – Real-time map of nearby clean toilets

🗑 Report Issues – Upload photos of hygiene problems

💬 Chatbot Assistant – AI-powered guide to help devotees with FAQs, navigation, and emergency steps

🛠 Admin Dashboard – Real-time tracking of reports & emergencies

ℹ️ About Section – App’s vision and purpose

Tech Stack

Frontend: React + Tailwind CSS + React Router

Backend: Node.js + Express.js (REST APIs)

Database: MongoDB / SQLite

Chatbot Assistant: Dialogflow / Rasa / Custom NLP with Python API

Other Tools: Vite, Fetch API, JWT Authentication

cleanmela/
│── src/                  
│   ├── App.jsx           # Main app with routes
│   ├── Home.jsx          # Home page
│   ├── Emergency.jsx     # SOS & alerts
│   ├── Report.jsx        # Issue reporting
│   ├── Toilets.jsx       # Toilet finder
│   ├── Admin.jsx         # Admin dashboard
│   ├── Chatbot.jsx       # Chatbot assistant UI
│   ├── assets/           # Images, logos
│
│── backend/              
│   ├── server.js         # Express server entry
│   ├── routes/           # API routes
│   ├── models/           # Database models
│   ├── chatbot/          # Chatbot API integration
│
│── README.md             

How to Run ??
                            Setup Frontend
cd cleanmela
npm install
npm run dev

                             Setup Backend

Frontend → http://localhost:5173
Backend → http://localhost:5000                           

                            Real-World Application

Devotees report sanitation issues instantly

Families locate nearest toilets easily

Faster emergency response saves lives

Chatbot assistant provides 24/7 support for pilgrims (directions, health tips, FAQs)

Organizers manage sanitation and safety in real time

                            Future Improvements

IoT-enabled smart bins & toilet sensors

AI-powered drone monitoring for crowd management

Voice-enabled chatbot for non-literate users

Scalability to other large gatherings & yatras  

                            Tagline

CleanMela — Smart Sanitation, Safe Mahakumbh.