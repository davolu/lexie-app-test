import { generateCoordinatesFromBBox } from "../../utils";

export const coordinatesResolver = {
    getCoords: args => {
        return `${generateCoordinatesFromBBox(args.limit, args.bbox)}`
    },
}