 
var { buildSchema } = require('graphql');
export const coordinateSchema = buildSchema(`
  type Query {
    getCoords(limit: String!, bbox: String!): String
  }
`);