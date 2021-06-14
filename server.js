// ----------------------------------------------------------------------------
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// ----------------------------------------------------------------------------
const express = require('express')

const app = express()
const mail =  require('./nodemail');

const port = process.env.PORT || 8080;

app.get('/',  [mail]);

app.listen(port, () => console.log(`Listening on port ${port}`));