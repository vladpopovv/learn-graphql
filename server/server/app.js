const express = require('express');
const graphqlHTTP = require('express-graphql');
const mongoose = require('mongoose');
const schema = require('../shema/shema');

mongoose.connect('mongodb+srv://learnGraphQl:learnGraphQl@cluster0-wqqhh.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
});

const app = express();
const PORT = 3030;

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}));

const dbConnection = mongoose.connection;
dbConnection.on('error', error => console.log('Connection error', error));
dbConnection.once('open', () => console.log('Connected to DB!', dbConnection.models));

app.listen(PORT, err => {
  err ? console.log(err) : console.log('Server started');
});
