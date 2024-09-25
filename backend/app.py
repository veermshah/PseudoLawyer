from flask import Flask
from chat import chat
from ai import generate_contract
from storage import save_message, upload_contract, submit_signature
from auth import login

app = Flask(__name__)

# Register routes from other files
app.add_url_rule('/chat', 'chat', chat, methods=['POST'])
app.add_url_rule('/generate-contract', 'generate_contract', generate_contract, methods=['POST'])
app.add_url_rule('/save-message', 'save_message', save_message, methods=['POST'])
app.add_url_rule('/upload-contract', 'upload_contract', upload_contract, methods=['POST'])
app.add_url_rule('/submit-signature', 'submit_signature', submit_signature, methods=['POST'])
app.add_url_rule('/login', 'login', login, methods=['POST'])

if __name__ == "__main__":
    app.run(debug=True)
