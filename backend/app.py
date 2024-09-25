from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)

# Enable CORS to allow frontend to communicate with the backend
CORS(app)

@app.route('/')
def hello_world():
    return "<p>Hello, World!</p>"

# Sample API for contract generation (Placeholder)
@app.route('/generate-contract', methods=['POST'])
def generate_contract():
    # In actual implementation, you will interact with AWS Bedrock here.
    data = request.json
    return jsonify({"contract_draft": f"Generated contract based on {data['input']}"})

# Other routes (e.g., user auth, store contract, etc.)
# Add endpoints as per your project needs

if __name__ == '__main__':
    app.run(debug=True)
