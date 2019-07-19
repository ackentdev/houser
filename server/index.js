require("dotenv").config();
const express = require('express');
const app = express();
const massive = require('massive');
const session = require('express-session');
const ctrl = require('./controller');

const {SERVER_PORT, SESSION_SECRET, CONNECTION_STRING} = process.env;

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log('*slaps roof of server* this bad boy can fit so many sql requests');
});

app.use(express.json());

app.listen(SERVER_PORT, () => {
    console.log(`Mama said they was my magic shoes on ${SERVER_PORT}`)
});