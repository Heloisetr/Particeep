import { MoviesAllDataContentType} from 'types/MoviesType';

export type Action =
  | GET_MOVIES_ACTION
  | GET_MOVIES_SUCCESS_ACTION
  | GET_MOVIES_FAILURE_ACTION;

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