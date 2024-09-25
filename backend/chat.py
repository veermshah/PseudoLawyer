# chat.py

from flask import request, jsonify
import boto3

bedrock_client = boto3.client('bedrock')

def chat():
    user_input = request.json['message']
    response = bedrock_client.invoke_model(
        ModelId='your-model-id',
        Body=user_input
    )
    return jsonify({'response': response['Body'].read().decode('utf-8')})
