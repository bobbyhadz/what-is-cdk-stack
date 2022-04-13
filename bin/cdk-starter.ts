#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import {MyCdkStack} from '../lib/cdk-starter-stack';

const app = new cdk.App();

// create our DEV stack 👇
new MyCdkStack(app, 'my-cdk-stack-dev', {
  stackName: 'my-cdk-stack-dev',
  env: {
    region: process.env.CDK_DEFAULT_REGION,
    account: process.env.CDK_DEFAULT_ACCOUNT,
  },
  tags: {env: 'dev'},
});

// create our PROD stack 👇
new MyCdkStack(app, 'my-cdk-stack-prod', {
  stackName: 'my-cdk-stack-prod',
  env: {
    region: process.env.CDK_DEFAULT_REGION,
    account: process.env.CDK_DEFAULT_ACCOUNT,
  },
  tags: {env: 'prod'},
});
