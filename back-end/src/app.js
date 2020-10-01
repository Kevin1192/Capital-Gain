const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 3001;
const authRoutes = require('./routes/auth');
const db = require('./models/index');
const errorHandler = require('./controllers/error');

require('dotenv').config();

const app = express();

app.use(bodyParser.json());

app.use(cors());


// delete
app.get('/', (req, res, next) => {
    return res.json({
        text: 'hello, success'
    })
})

app.use('/api/auth', authRoutes);

app.use(function(req, res, next) {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
})

app.use(errorHandler);

db.sequelize.sync({ force: true }).then(() => {
    
    app.listen(port,() => console.log("listening on" + port) )
})