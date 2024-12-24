// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

// {fact rule=javascript-sns-confirmsubscription-call@v1.0 defects=0}
let SNSClient = require('aws-sdk/clients/sns');
let sns1 = new SNSClient({region: 'us-west-2', apiVersion: '2014-10-01'});


function compliant() {
    let AWS = require('aws-sdk');
    let sns = new AWS.SNS({apiVersion: '2010-03-31'});
    let params = {
        Token: 'STRING_VALUE', 
        TopicArn: 'STRING_VALUE', 
        // Compliant: Subscription calls set the `AuthenticateOnUnsubscribe` to enabled.
        AuthenticateOnUnsubscribe: 'true'
    };
    sns.confirmSubscription(params, function(err, data) {
        if (err) console.log(err, err.stack); 
        else     console.log(data);          
    });
}
// {/fact}
