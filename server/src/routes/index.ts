import express from 'express';
import {getCoordinatesPointsController} from '../controllers/coordinates-controller';
const  coordinatesRouter = express()
coordinatesRouter.get('/coordinates',getCoordinatesPointsController)
module.exports = coordinatesRouter;