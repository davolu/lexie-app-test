const random = require('geojson-random');
export const getCoordinatesBasedOnBBox =  (bbox:any) =>{
      return random.point(5,[10,-10,-10,10]);
}