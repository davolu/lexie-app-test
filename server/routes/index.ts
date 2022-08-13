import express from 'express';
import {getCoordinatesPoints} from '../controllers/coordinates-controller';
const  CoordinatesRouter = express()
CoordinatesRouter.get('/coordinates',getCoordinatesPoints)
module.exports = CoordinatesRouter;