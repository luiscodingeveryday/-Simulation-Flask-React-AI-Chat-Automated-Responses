# Simulated AI Chat with Flask + React

This is a sample project that simulates an AI assistant using a backend built with Python Flask and a frontend with React.js. The communication between them happens over HTTP, and the “model” response is simulated without a real connection to Azure.

## How to run it locally?

### Backend (Flask)

Install dependencies with `pip install flask flask-cors`

Start the server with `python app.py`  
The backend will be available at `http://localhost:5000`

### Frontend (React)

Install dependencies with `npm install`

Start the app with `npm start`  
The frontend will be available at `http://localhost:3000`

## AI response simulation

The backend returns simulated answers based on keywords like “hola” or “precio”. This logic can easily be replaced with real calls to an AI model.

## Español

# Chat IA Simulado con Flask + React

Este es un proyecto de ejemplo que simula un asistente de inteligencia artificial utilizando un backend con **Python Flask** y un frontend con **React.js**. La comunicación entre ambos se realiza mediante HTTP, y la respuesta del “modelo” está simulada sin conexión real a Azure.

## ¿Cómo ejecutarlo en local?

### Backend (Flask)

– Instalar dependencias con `pip install flask flask-cors`  
– Iniciar el servidor con `python app.py`  
El backend queda disponible en `http://localhost:5000`

### Frontend (React)

– Instalar dependencias con `npm install`  
– Levantar la aplicación con `npm start`  
El frontend queda disponible en `http://localhost:3000`

## Simulación de respuestas IA

El backend devuelve respuestas simuladas basadas en palabras clave como “hola” o “precio”. Esta lógica puede reemplazarse fácilmente por llamadas reales a un modelo de IA.
