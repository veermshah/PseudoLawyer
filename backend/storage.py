import boto3
import os
from flask import request
from dotenv import load_dotenv

load_dotenv()

AWS_DEFAULT_REGION = os.getenv('AWS_DEFAULT_REGION')
AWS_ACCESS_KEY_ID = os.getenv('AWS_ACCESS_KEY_ID')
AWS_SECRET_ACCESS_KEY = os.getenv('AWS_SECRET_ACCESS_KEY')
S3_BUCKET_NAME = os.getenv('S3_BUCKET_NAME')

s3 = boto3.client(
    's3',
    region_name=AWS_DEFAULT_REGION,
    aws_access_key_id=AWS_ACCESS_KEY_ID,
    aws_secret_access_key=AWS_SECRET_ACCESS_KEY
)

def upload_contract():
    file = request.files['contract']
    s3.upload_fileobj(file, S3_BUCKET_NAME, file.filename)
    return{"message": "Contract uploadded successfully"}

def list_bucket_contents():
    response = s3.list_objects_v2(Bucket=S3_BUCKET_NAME)
    if 'Contents' in response:
        for obj in response['Contents']:
            print(obj['Key'])
    else:
        print("Bucket is empty or does not exist.")


