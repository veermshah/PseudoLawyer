from flask import Flask, jsonify, request
from flask_cors import CORS
from dotenv import load_dotenv
import os
import boto3
from langchain_aws import ChatBedrock
from langchain.prompts import PromptTemplate

# Load environment variables from .env
load_dotenv()

# Initialize Flask app
app = Flask(__name__)
CORS(app)  # Enable CORS for frontend-backend communication

# Set up the Bedrock client
bedrock_client = boto3.client(
    service_name="bedrock-runtime",
    region_name=os.getenv('AWS_REGION'),
    aws_access_key_id=os.getenv('AWS_ACCESS_KEY_ID'),
    aws_secret_access_key=os.getenv('AWS_SECRET_ACCESS_KEY')
)

# Define model ID for Bedrock
modelID = "anthropic.claude-3-5-sonnet-20240620-v1:0"

# Initialize Bedrock model in Langchain (without max_tokens_to_sample)
llm = ChatBedrock(
    model_id=modelID,
    client=bedrock_client
)

# Function to handle chatbot responses
def my_chatbot(freeform_text):
    prompt = PromptTemplate(
        input_variables=["freeform_text"],
        template="You are a helpful AI chatbot.\n\n{freeform_text}"
    )

    # Formulate message as per required structure
    message = {"role": "user", "content": freeform_text}
    
    # Call the LLM with the message format
    response = llm.invoke([message])

    # Return the response's text content, not as a dictionary
    return response.content if hasattr(response, 'content') else str(response)

# Define chat route
@app.route('/chat', methods=['POST'])
def chat():
    try:
        data = request.json
        user_message = data.get('message', '')

        if not user_message:
            return jsonify({'response': 'No message provided'}), 400

        # Send the message to the chatbot
        response = my_chatbot(user_message)

        # Respond with AI's message
        return jsonify({'response': response}), 200

    except Exception as e:
        print(f"Error occurred: {e}")
        return jsonify({'response': 'There was an error.'}), 500

# Run Flask app
if __name__ == '__main__':
    app.run(debug=True)
