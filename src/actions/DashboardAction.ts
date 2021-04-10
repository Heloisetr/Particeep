import { MoviesAllDataContentType, MoviesDeletedResponseContentType} from 'types/MoviesType';

export type Action =
  | GET_MOVIES_ACTION
  | GET_MOVIES_SUCCESS_ACTION
  | GET_MOVIES_FAILURE_ACTION
  | DELETE_MOVIE_ACTION
  | DELETE_MOVIE_SUCCESS_ACTION
  | DELETE_MOVIE_FAILURE_ACTION;

export const GET_MOVIES = 'GET_MOVIES';
export const getMovies = (): GET_MOVIES_ACTION => ({
  type: GET_MOVIES,
});

export const GET_MOVIES_SUCCESS = 'GET_MOVIES_SUCCESS';
export const getMoviesSuccess = (moviesData: MoviesAllDataContentType): GET_MOVIES_SUCCESS_ACTION => ({
  type: GET_MOVIES_SUCCESS,
  payload: moviesData,
});

export const GET_MOVIES_FAILURE = 'GET_MOVIES_FAILURE';
export const getMoviesFailure = (): GET_MOVIES_FAILURE_ACTION => ({
  type: GET_MOVIES_FAILURE,
});

export const DELETE_MOVIE = 'DELETE_MOVIE';
export const deleteMovie = (movieId: string): DELETE_MOVIE_ACTION => ({
  type: DELETE_MOVIE,
  payload: movieId,
});

export const DELETE_MOVIE_SUCCESS = 'DELETE_MOVIE_SUCCESS';
export const deleteMovieSuccess = (data: MoviesDeletedResponseContentType): DELETE_MOVIE_SUCCESS_ACTION => ({
  type: DELETE_MOVIE_SUCCESS,
  payload: data,
});

export const DELETE_MOVIE_FAILURE = 'DELETE_MOVIE_FAILURE';
export const deleteMovieFailure = (): DELETE_MOVIE_FAILURE_ACTION => ({
  type: DELETE_MOVIE_FAILURE,
});
export interface GET_MOVIES_ACTION {
  type: typeof GET_MOVIES;
}

export interface GET_MOVIES_SUCCESS_ACTION {
  type: typeof GET_MOVIES_SUCCESS;
  payload: MoviesAllDataContentType;
}

export interface GET_MOVIES_FAILURE_ACTION {
  type: typeof GET_MOVIES_FAILURE;
}

export interface DELETE_MOVIE_ACTION {
  type: typeof DELETE_MOVIE;
  payload: string;
}

export interface DELETE_MOVIE_SUCCESS_ACTION {
  type: typeof DELETE_MOVIE_SUCCESS;
  payload: MoviesDeletedResponseContentType;
}

export interface DELETE_MOVIE_FAILURE_ACTION {
  type: typeof DELETE_MOVIE_FAILURE;
}