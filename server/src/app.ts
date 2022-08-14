import express from 'express';
const { graphqlHTTP } = require('express-graphql');
 import {coordinateSchema} from '../src/graphql/schema/coordinatesSchema';
import {coordinatesResolver} from '../src/graphql/resolvers/coordinatesResolver';


const app = express();
app.use('/coordinates', graphqlHTTP({
    schema: coordinateSchema,
    rootValue: coordinatesResolver,
    graphiql: true,
  }))
 
export default app;