'use strict';

const http = require('http');

const host = "127.0.0.1";
const port = 3000;

const cors = require('cors');
const morgan = require('morgan');

const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(cors());
app.use(express.static('public'));

const server = http.createServer(app);

server.listen(port, host, () => {
    console.log('Server has started.')
});

const rootController = require('./routes/index');
const customersController = require('./routes/customers');
const contestsController = require('./routes/contests');

app.use('/', rootController);
app.use('/customers', customersController);
app.use('/contests', contestsController);