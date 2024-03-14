const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require("dotenv").config();

const app = express();
const CONNECTION_PORT = process.env.PORT || 3005;

app.listen(CONNECTION_PORT, () => {
    console.log(`Running on ${CONNECTION_PORT}`);
})

// conexion a base de datos

const mongo_connect = () => {
    try {

        mongoose
            .connect(process.env.DATABASE_CONNECTION_STRING)
            .then(() => {
                console.log("Connected to database");
            })
            .catch((err) => {
                console.log("Error connecting to database");
            })

    } catch (error) {
        console.log(error);

    }

}
mongo_connect();