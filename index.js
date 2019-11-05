const express = require('express');
const parser = require('body-parser');
const cors = require('cors');

const Database = require('./models/database');
const routes = require('./routes');

const dbUrl = 'mongodb://127.0.0.1:27017/smart-diet';
new Database(dbUrl)

const server = express();
const port = 3000;
server.use(parser.json());
server.use(cors());
server.use(routes);

// Start Server
server.listen(port, () => console.log(`Running server in port ${port}!`));