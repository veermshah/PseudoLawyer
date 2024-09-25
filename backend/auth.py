# auth.py
from flask import request, jsonify
import boto3
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

cognito = boto3.client('cognito-idp', region_name=os.getenv('AWS_DEFAULT_REGION'))

def login():
    data = request.json
    response = cognito.admin_initiate_auth(
        UserPoolId=os.getenv('COGNITO_USER_POOL_ID'),
        ClientId=os.getenv('COGNITO_CLIENT_ID'),
        AuthFlow='ADMIN_NO_SRP_AUTH',
        AuthParameters={
            'USERNAME': data['username'],
            'PASSWORD': data['password']
        }
    )
    return jsonify(response)
