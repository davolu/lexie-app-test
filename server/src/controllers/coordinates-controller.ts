import express, { Request, Response, NextFunction } from 'express';
import {generateCoordinatesFromBBox} from '../utils/';
 
  export const getCoordinatesPointsController = (request: Request, response: Response, next: NextFunction) => {
    let bbox  = request.query.bbox.toString(); //bounding box from url param
    let limit = request.query.limit.toString(); // max amount of coordinates to generate
    let coordinates = generateCoordinatesFromBBox(bbox,limit);
    response.status(200).json(coordinates);
    next();
  };
  
  