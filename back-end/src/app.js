const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const port = 3001;

const db = require('./models/index');
const errorHandler = require('./controllers/error');


const app = express();

app.use(bodyParser.json());

app.use(cors());


app.use(function(req, res, next) {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
})

app.use(errorHandler);
app.listen(port,() => console.log("listening on" + port) )