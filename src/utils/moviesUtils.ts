import { MoviesContentType, MoviesAllDataContentType } from 'types/MoviesType';

function getMoviesCategories(data: MoviesContentType[]): string[] {
  let categories: string[] = [];

  data.map((movie) => {
    if (!categories.includes(movie.category)) {
      categories.push(movie.category);
    }
  });

  return categories;
}

export default getMoviesCategories;