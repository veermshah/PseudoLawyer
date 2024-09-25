# storage.py

import boto3
from flask import request, jsonify

dynamodb = boto3.resource('dynamodb')
chat_table = dynamodb.Table('ChatHistory')
s3_client = boto3.client('s3')

def save_message():
    chat_data = request.json
    chat_table.put_item(Item=chat_data)
    return {"message": "Chat saved successfully"}

def upload_contract():
    contract = request.files['contract']
    s3_client.upload_fileobj(contract, 'contracts-bucket', contract.filename)
    return {"message": "Contract uploaded successfully"}

def submit_signature():
    signature_data = request.json['signature']
    contract_id = request.json['contract_id']
    # Logic to attach the signature to the contract
    return {"message": "Signature saved and contract finalized"}
