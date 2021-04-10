import { MoviesContentType, MoviesAllDataContentType } from 'types/MoviesType';

export function getMoviesCategories(data: MoviesContentType[]): string[] {
  let categories: string[] = [];

  data.map((movie) => {
    if (!categories.includes(movie.category)) {
      categories.push(movie.category);
    }
    return null;
  });

  return categories;
}

export function getMoviesWithoutDeleted(deleted: string[], data: MoviesContentType[]): MoviesAllDataContentType {
  let moviesData: MoviesAllDataContentType = {
    movies: [],
    categories: [],
  }
  let movieData: MoviesContentType = {
    id: '',
    title: '',
    category: '',
    likes: 0,
    dislikes: 0,
  };

  data.map((movie) => {
    if (!deleted.includes(movie.id)) {
      console.log(movie.title);
      movieData = {
        title: movie.title,
        category: movie.category,
        id: movie.id,
        likes: movie.likes,
        dislikes: movie.dislikes,
      }
      moviesData.movies.push(movieData);
      if (!moviesData.categories.includes(movie.category)) {
        moviesData.categories.push(movie.category);
      }
    }
    return null;
  });

  return moviesData;
}
