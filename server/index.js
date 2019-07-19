require("dotenv").config();
const express = require('express');
const app = express();
const ctrl = require('./controller')

const {SERVER_PORT} = process.env;

app.use(express.json());

app.listen(SERVER_PORT, () => {
    console.log(`Mama said they was my magic shoes on ${SERVER_PORT}`)
});