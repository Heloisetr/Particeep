import { MoviesAllDataContentType, MoviesDeletedResponseContentType} from 'types/MoviesType';

export type Action =
  | GET_MOVIES_ACTION
  | GET_MOVIES_SUCCESS_ACTION
  | GET_MOVIES_FAILURE_ACTION
  | DELETE_MOVIE_ACTION
  | DELETE_MOVIE_SUCCESS_ACTION
  | DELETE_MOVIE_FAILURE_ACTION
  | CHANGE_ITEMS_PAGE_ACTION
  | CHANGE_ITEMS_PAGE_SUCCESS_ACTION
  | CHANGE_ITEMS_PAGE_FAILURE_ACTION
  | SEND_DATA_PAGINATION_ACTION
  | SEND_DATA_PAGINATION_SUCCESS_ACTION
  | SEND_DATA_PAGINATION_FAILURE_ACTION
  | SEND_FILTER_DATA_ACTION
  | SEND_FILTER_DATA_SUCCESS_ACTION
  | SEND_FILTER_DATA_FAILURE_ACTION;

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

export const CHANGE_ITEMS_PAGE = 'CHANGE_ITEMS_PAGE';
export const changeItemsPage = (itemsPage: number): CHANGE_ITEMS_PAGE_ACTION => ({
  type: CHANGE_ITEMS_PAGE,
  payload: itemsPage,
});

export const DELETE_MOVIE_FAILURE = 'DELETE_MOVIE_FAILURE';
export const deleteMovieFailure = (): DELETE_MOVIE_FAILURE_ACTION => ({
  type: DELETE_MOVIE_FAILURE,
});

export const CHANGE_ITEMS_PAGE_SUCCESS = 'CHANGE_ITEMS_PAGE_SUCCESS';
export const changeItemsPageSuccess = (moviesData: MoviesAllDataContentType): CHANGE_ITEMS_PAGE_SUCCESS_ACTION => ({
  type: CHANGE_ITEMS_PAGE_SUCCESS,
  payload: moviesData,
});

export const CHANGE_ITEMS_PAGE_FAILURE = 'CHANGE_ITEMS_PAGE_FAILURE';
export const changeItemsPageFailure = (): CHANGE_ITEMS_PAGE_FAILURE_ACTION => ({
  type: CHANGE_ITEMS_PAGE_FAILURE,
});


export const SEND_DATA_PAGINATION = 'SEND_DATA_PAGINATION';
export const sendDataPagination = (offset: number): SEND_DATA_PAGINATION_ACTION => ({
  type: SEND_DATA_PAGINATION,
  payload: offset,
});

export const SEND_DATA_PAGINATION_SUCCESS = 'SEND_DATA_PAGINATION_SUCCESS';
export const sendDataPaginationSuccess = (moviesData: MoviesAllDataContentType): SEND_DATA_PAGINATION_SUCCESS_ACTION => ({
  type: SEND_DATA_PAGINATION_SUCCESS,
  payload: moviesData,
});

export const SEND_DATA_PAGINATION_FAILURE = 'SEND_DATA_PAGINATION_FAILURE';
export const sendDataPaginationFailure = (): SEND_DATA_PAGINATION_FAILURE_ACTION => ({
  type: SEND_DATA_PAGINATION_FAILURE,
});


export const SEND_FILTER_DATA = 'SEND_FILTER_DATA';
export const sendFilterData = (categoriesFilter: string[]): SEND_FILTER_DATA_ACTION => ({
  type: SEND_FILTER_DATA,
  payload: categoriesFilter,
});

export const SEND_FILTER_DATA_SUCCESS = 'SEND_FILTER_DATA_SUCCESS';
export const sendFilterDataSuccess = (moviesData: MoviesAllDataContentType): SEND_FILTER_DATA_SUCCESS_ACTION => ({
  type: SEND_FILTER_DATA_SUCCESS,
  payload: moviesData,
});

export const SEND_FILTER_DATA_FAILURE = 'SEND_FILTER_DATA_FAILURE';
export const sendFilterDataFailure = (): SEND_FILTER_DATA_FAILURE_ACTION => ({
  type: SEND_FILTER_DATA_FAILURE,
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

export interface CHANGE_ITEMS_PAGE_ACTION {
  type: typeof CHANGE_ITEMS_PAGE;
  payload: number;
}

export interface CHANGE_ITEMS_PAGE_SUCCESS_ACTION {
  type: typeof CHANGE_ITEMS_PAGE_SUCCESS;
  payload: MoviesAllDataContentType;
}

export interface CHANGE_ITEMS_PAGE_FAILURE_ACTION {
  type: typeof CHANGE_ITEMS_PAGE_FAILURE;
}

export interface SEND_DATA_PAGINATION_ACTION {
  type: typeof SEND_DATA_PAGINATION;
  payload: number;
}

export interface SEND_DATA_PAGINATION_SUCCESS_ACTION {
  type: typeof SEND_DATA_PAGINATION_SUCCESS;
  payload: MoviesAllDataContentType;
}

export interface SEND_DATA_PAGINATION_FAILURE_ACTION {
  type: typeof SEND_DATA_PAGINATION_FAILURE;
}

export interface SEND_FILTER_DATA_ACTION {
  type: typeof SEND_FILTER_DATA;
  payload: string[];
}

export interface SEND_FILTER_DATA_SUCCESS_ACTION {
  type: typeof SEND_FILTER_DATA_SUCCESS;
  payload: MoviesAllDataContentType;
}

export interface SEND_FILTER_DATA_FAILURE_ACTION {
  type: typeof SEND_FILTER_DATA_FAILURE;
}