# ai.py

from flask import request, jsonify
import boto3

bedrock_client = boto3.client('bedrock')

def generate_contract():
    user_data = request.json
    response = bedrock_client.invoke_model(
        ModelId='contract-generation-model-id',
        Body=user_data['contract_details']
    )
    return jsonify({'contract_draft': response['Body'].read().decode('utf-8')})
