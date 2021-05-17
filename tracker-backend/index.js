const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');


const transaction = require('./routes/transaction');

const app = express();

const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3000;
app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`); // print this when the server starts
});
