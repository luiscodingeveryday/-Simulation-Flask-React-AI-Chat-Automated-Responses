# backend/app.py
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow React frontend to call this backend from a different port

@app.route('/api/chat', methods=['POST'])
def chat():
    user_message = request.json.get('message', '')

    # Simulate AI response (replace with your real Azure call)
    if 'hello' in user_message.lower():
        response_text = "Hello! How can I help you today?"
    elif 'price' in user_message.lower():
        response_text = "Our prices are competitive. What service are you interested in?"
    else:
        response_text = "Sorry, I didn't understand that. Could you try rephrasing?"

    return jsonify({'response': response_text})

if __name__ == '__main__':
    # Run in debug mode for development
    app.run(debug=True)
