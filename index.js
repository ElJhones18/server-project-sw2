const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./src/routes/user_routes');
require("dotenv").config();
// 
const bodyParser = require('body-parser');

// Puerto

const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
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
                console.log("Error connecting to database", err);
            })

    } catch (error) {
        console.log(error);

    }

}
mongo_connect();

// Rutas
app.use('/api/v1/users', userRoutes)

