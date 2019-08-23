const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('../shema/shema');

const app = express();
const PORT = 3000;

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}));

app.listen(PORT, err => {
  err ? console.log(err) : console.log('Server started');
});
