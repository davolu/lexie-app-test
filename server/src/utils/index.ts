const random = require('geojson-random');
export const generateCoordinatesFromBBox =  (bbox:string, limit:string) =>{
      return random.point(limit,bbox.split(",")); 
} 