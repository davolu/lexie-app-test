This project contains backend and frontend for the technical interview project. 

-Backend Built with NodeJS (TypeScript), Express, and Jest for testing. 
-Frontend Built with React (Typescript)

RUNNING THE BACKEND SERVICE
1. `npm install`
2. `npm run serve`

This will launch the graphql server . Use query:
`{
  getCoords(limit:"5", bbox:"10,11,-12,12")
}`   

limit - maximum amount of data coordinates to generate
bbox - Boundary box coords

TO run test `npm run test`

RUNNING THE FRONTEND 