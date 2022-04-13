import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';
import * as cdk from 'aws-cdk-lib';

// define our Stack 👇
export class MyCdkStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // create a Dynamodb table using the Table construct
    const table = new dynamodb.Table(this, 'my-table', {
      billingMode: dynamodb.BillingMode.PAY_PER_REQUEST,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      partitionKey: {name: 'date', type: dynamodb.AttributeType.STRING},
    });
  }
}
