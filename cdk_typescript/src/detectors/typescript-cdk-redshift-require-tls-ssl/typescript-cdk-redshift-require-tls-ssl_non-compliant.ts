// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

// {fact rule=typescript-cdk-redshift-require-tls-ssl@v1.0 defects=1}
import { CfnCluster } from 'aws-cdk-lib/aws-redshift';
import * as cdk from 'aws-cdk-lib';
import { Stack } from "aws-cdk-lib";

export class CdkStarterStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    // Noncompliant: No parameter group specified, allowing unencrypted connections by default.
    new CfnCluster(Stack, 'rRedshiftCluster', {
      masterUsername: 'use_a_secret_here',
      masterUserPassword: 'use_a_secret_here',
      clusterType: 'single-node',
      dbName: 'bar',
      nodeType: 'ds2.xlarge'
    });
  }
}
// {/fact}
