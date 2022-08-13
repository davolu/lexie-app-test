import express, { Request, Response, NextFunction } from 'express';
import {getCoordinatesBasedOnBBox} from '../utils/index';
 
  export const getCoordinatesPoints = (request: Request, response: Response, next: NextFunction) => {
    let bbox=request.query.bbox.toString();
    let coordinates = getCoordinatesBasedOnBBox(bbox);
    response.status(200).json(coordinates);
  };
  

  