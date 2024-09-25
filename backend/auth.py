# auth.py

from flask import request
import boto3

cognito_client = boto3.client('cognito-idp')

def login():
    data = request.get_json()
    response = cognito_client.admin_initiate_auth(
        UserPoolId='env.AWS_COGNITO_USER_POOL_ID',
        ClientId='env.AWS_COGNITO_APP_CLIENT_ID',
        AuthFlow='ADMIN_NO_SRP_AUTH',
        AuthParameters={
            'USERNAME': data['username'],
            'PASSWORD': data['password']
        }
    )
    return response
