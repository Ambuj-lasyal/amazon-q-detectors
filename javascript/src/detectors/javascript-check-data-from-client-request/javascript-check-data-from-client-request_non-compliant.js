// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

// {fact rule=javascript-check-data-from-client-request@v1.0 defects=1}
const csrf = require('csurf');
const cookieParser = require('cookie-parser');
const express = require('express');

const app = express();

app.use(cookieParser());

const csrfProtection = csrf();
app.use(csrfProtection);

app.get('/welcome', (req, res) => {
    const modified_date = req.body.modified_date;
    // Noncompliant: Passing user controlled input directly to `res.cookie` method.
    res.cookie("info_mod_date", modified_date);
    res.send("Welcome !");
});
// {/fact}
