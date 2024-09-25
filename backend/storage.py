# storage.py
import boto3
import os
from flask import request

s3 = boto3.client('s3', region_name=os.getenv('AWS_DEFAULT_REGION'))

def upload_contract():
    file = request.files['contract']
    s3.upload_fileobj(file, 'your-s3-bucket', file.filename)
    return {"message": "Contract uploaded successfully"}
