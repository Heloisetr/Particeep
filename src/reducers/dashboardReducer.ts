import {
  GET_MOVIES,
  GET_MOVIES_SUCCESS,
  GET_MOVIES_FAILURE,
  DELETE_MOVIE,
  DELETE_MOVIE_SUCCESS,
  DELETE_MOVIE_FAILURE,
  CHANGE_ITEMS_PAGE,
  CHANGE_ITEMS_PAGE_SUCCESS,
  CHANGE_ITEMS_PAGE_FAILURE,
  SEND_DATA_PAGINATION,
  SEND_DATA_PAGINATION_SUCCESS,
  SEND_DATA_PAGINATION_FAILURE,
  SEND_FILTER_DATA,
  SEND_FILTER_DATA_SUCCESS,
  SEND_FILTER_DATA_FAILURE,
} from 'actions/DashboardAction';

import { ActionType } from 'types/ActionsType';
import { MoviesAllDataContentType } from 'types/MoviesType';

const initialState = {
  moviesData: {
    movies: [],
    categories: [],
  },
  movieId: '',
  deletedMovies: [],
  itemsPage: 12,
  offset: 0,
  totalNumber: 0,
  categoriesFilter: [],
};

export interface StateType {
  moviesData: MoviesAllDataContentType;
  movieId: string;
  deletedMovies: string[];
  itemsPage: number;
  offset: number;
  totalNumber: number;
  categoriesFilter: string[];
}

export default function dashboardState(state: StateType = initialState, action: ActionType): StateType {
  switch(action.type) {
    case GET_MOVIES:
      return {
        ...state,
      };

    case GET_MOVIES_SUCCESS:
      return {
        ...state,
        moviesData: action.payload,
        totalNumber: action.payload.movies.length,
      };

    case GET_MOVIES_FAILURE:
      return {
        ...state,
      };

    case DELETE_MOVIE:
      return {
        ...state,
        movieId: action.payload,
      };

    case DELETE_MOVIE_SUCCESS:
      return {
        ...state,
        moviesData: action.payload.movies,
        deletedMovies: action.payload.deletedMovies,
        totalNumber: state.totalNumber - 1,
      };

    case DELETE_MOVIE_FAILURE:
      return {
        ...state,
      };

    case CHANGE_ITEMS_PAGE:
      return {
        ...state,
        itemsPage: action.payload,
      };

    case CHANGE_ITEMS_PAGE_SUCCESS:
      return {
        ...state,
        moviesData: action.payload,
      };

    case CHANGE_ITEMS_PAGE_FAILURE:
      return {
        ...state,
      };

    case SEND_DATA_PAGINATION:
      return {
        ...state,
        offset: action.payload,
      };

    case SEND_DATA_PAGINATION_SUCCESS:
      return {
        ...state,
        moviesData: action.payload,
        offset: 0,
      };

    case SEND_DATA_PAGINATION_FAILURE:
      return {
        ...state,
      };

    case SEND_FILTER_DATA:
      return {
        ...state,
        categoriesFilter: action.payload,
      };

    case SEND_FILTER_DATA_SUCCESS:
      return {
        ...state,
        moviesData: action.payload,
        offset: 0,
      };

    case SEND_FILTER_DATA_FAILURE:
      return {
        ...state,
      };

    default:
      return state;
  }
}