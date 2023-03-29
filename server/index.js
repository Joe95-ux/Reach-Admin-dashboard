require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
//helmet is a security implementation for making api calls
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const clientRoutes = require('./routes/client');
const salesRoutes = require('./routes/sales');
const managementRoutes = require('./routes/management');
const generalRoutes = require('./routes/general');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}));
app.use(morgan("common"));
app.use(cors());


/* ROUTES */
app.use('/client', clientRoutes);
app.use('/general', generalRoutes);
app.use('/management', managementRoutes);
app.use('/sales', salesRoutes);

