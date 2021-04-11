import { MoviesContentType, MoviesAllDataContentType } from 'types/MoviesType';

function getCategoriesFilter(filter: string[], data: MoviesContentType[]): MoviesContentType[] {
  let movies: MoviesContentType[] = [];

  data.map((movie) => {
    if (filter.includes(movie.category)) {
      movies.push(movie);
    }
    return null;
  });

  return movies;
}

export function getMoviesWithoutDeleted(deleted: string[], data: MoviesContentType[], itemsPage: number, offset: number, filter: string[]): MoviesAllDataContentType {
  let moviesData: MoviesAllDataContentType = {
    movies: [],
    categories: [],
  }
  let item = 0;
  let movieClear: MoviesContentType[] = [];
  let moviesCategories: MoviesContentType[] = [];

  if (filter.length === 0) {
    moviesCategories = data;
  } else {
    moviesCategories = getCategoriesFilter(filter, data);
  }

  moviesCategories.map((movie) => {
    if (!deleted.includes(movie.id)) {
      movieClear.push(movie);
    }
    return null;
  });

  movieClear.map((movie, index) => {
    if (index >= offset) {
      if (item !== itemsPage) {
        moviesData.movies.push(movie);
        item++;
      }
    }
    return null;
  });

  data.map((movie) => {
    if (!deleted.includes(movie.id) && !moviesData.categories.includes(movie.category)) {
      moviesData.categories.push(movie.category);
    }
    return null;
  });

  return moviesData;
}
