const random = require('geojson-random');
export const generateCoordinatesFromBBox =  (limit:string, bbox:string) =>{
      return random.point(limit,bbox.split(",")); 
} 