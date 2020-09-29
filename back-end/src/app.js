const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();


const app = express();

const db_link = process.env.DB_LINK;

app.use(bodyParser.json());

app.use(cors());