from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Para permitir que React consuma este backend desde otro puerto

@app.route('/api/chat', methods=['POST'])
def chat():
    user_message = request.json.get('message', '')

    # Simulación de respuesta de IA (aquí pondrías el call real a Azure)
    if 'hola' in user_message.lower():
        response_text = "¡Hola! ¿En qué puedo ayudarte hoy?"
    elif 'precio' in user_message.lower():
        response_text = "Nuestros precios son competitivos, ¿qué servicio te interesa?"
    else:
        response_text = "Lo siento, no entendí tu pregunta. ¿Puedes reformularla?"

    return jsonify({'response': response_text})

if __name__ == '__main__':
    app.run(debug=True)
