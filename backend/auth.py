# auth.py

from flask import request, jsonify
import boto3
import os
from dotenv import load_dotenv

# Load .env variables
load_dotenv()

cognito_client = boto3.client('cognito-idp')

def login():
    data = request.get_json()

    # Retrieve AWS Cognito details from environment variables
    user_pool_id = os.getenv('AWS_COGNITO_USER_POOL_ID')
    app_client_id = os.getenv('AWS_COGNITO_APP_CLIENT_ID')

    try:
        response = cognito_client.admin_initiate_auth(
            UserPoolId=user_pool_id,
            ClientId=app_client_id,
            AuthFlow='ADMIN_NO_SRP_AUTH',
            AuthParameters={
                'USERNAME': data['username'],
                'PASSWORD': data['password']
            }
        )
        return jsonify(response)
    except cognito_client.exceptions.NotAuthorizedException:
        return jsonify({"error": "Invalid credentials"}), 401
    except Exception as e:
        return jsonify({"error": str(e)}), 500
