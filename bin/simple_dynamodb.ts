#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/core');
import { SimpleDynamodbStack } from '../lib/simple_dynamodb-stack';

const app = new cdk.App();
new SimpleDynamodbStack(app, 'SimpleDynamodbStack');
