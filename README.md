This project contains backend and frontend for the technical interview project. 

Backend task: create a single API endpoint which will generate a number of randomly located geometry coordinates within a given boundary box and return coordinates as an array of lat/long dictionaries or named arrays.

Frontend task : Using the above API endpoint and plot the coordinates on a map

<br/>
-Backend Built with NodeJS (TypeScript), Express, GraphQL, and Jest for testing. 
-Frontend Built with React (Typescript), GraphQL, and React-testing-library for test.

RUNNING THE BACKEND SERVICE
1. `npm install`
2. `npm run serve`

This will launch the graphql server . Use query:
`{
  getCoords(bbox:"10,11,-12,12")
}`   

limit - maximum amount of data coordinates to generate
bbox - Boundary box coords

TO run test `npm run test`

RUNNING THE FRONTEND 

1. `npm install`
2. `npm start`

TO run test `npm  test`


Backend GraphQl Screenshot: 


App Demo (Video):
