require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}));

