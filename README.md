This project contains backend and frontend for the technical interview project. 

<b>Task</b>
Backend task: create a single API endpoint which will generate a number of randomly located geometry coordinates within a given boundary box and return coordinates as an array of lat/long dictionaries or named arrays.
<br/>
Frontend task : Using the above API endpoint and plot the coordinates on a map
<br/>
<br/>

<b>Tech Stack</b>
-Backend :
  -NodeJs/Express,
  -TypeScript 
  -GraphQL,
  -Jest for testing. 
  <br/>

-Frontend :
    -React 
    -Typescript, 
    -GraphQL, 
    -React-testing-library for test.
    <br/>

<b>RUNNING THE BACKEND SERVICE</b>
1. `npm install`
2. `npm run serve`

This will launch the graphql server . Use query:
`{
  getCoords(bbox:"10,11,-12,12")
}`   

limit - maximum amount of data coordinates to generate
bbox - Boundary box coords

TO run test `npm run test`
<br/>
<br/>

<b>RUNNING THE FRONTEND </b>

1. `npm install`
2. `npm start`

TO run test `npm  test`


Backend GraphQl Screenshot: 
<img src="https://github.com/davolu/lexie-app-test/blob/master/client/public/demo-pics.png" />
<br/>

Frontend App Screenshot: 
<img src="https://github.com/davolu/lexie-app-test/blob/master/client/public/demo-app.png" />
<br/>
<br/>
App Demo (Video):
https://drive.google.com/file/d/1ILF8mo9VFhQ2_h4Dr9hOG9OopwW7C-F1/view?usp=sharing
