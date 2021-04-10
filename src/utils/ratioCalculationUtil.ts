import { MoviesContentType } from "types/MoviesType";

function ratioCalculation(data: MoviesContentType): number {
  return ((data.likes * 100) / (data.likes + data.dislikes));
}

export default ratioCalculation;