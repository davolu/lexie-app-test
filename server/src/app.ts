import express from 'express';  
const app = express();
const coordinateRoute =  require('./routes/coordinateRoute');
app.use('/', coordinateRoute)
export default app;
