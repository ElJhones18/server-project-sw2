const express = require('express');
require("dotenv").config();

const app = express();
const CONNECTION_PORT = process.env.PORT || 3005;

app.listen(CONNECTION_PORT, () => {
    console.log(`Running on ${CONNECTION_PORT}`);
})