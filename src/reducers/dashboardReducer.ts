import {
  GET_MOVIES,
  GET_MOVIES_SUCCESS,
  GET_MOVIES_FAILURE,
  DELETE_MOVIE,
  DELETE_MOVIE_SUCCESS,
  DELETE_MOVIE_FAILURE,
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
};

export interface StateType {
  moviesData: MoviesAllDataContentType;
  movieId: string;
  deletedMovies: string[];
}

export default function dashboardState(state: StateType = initialState, action: ActionType): StateType {
  console.log(action);
  switch(action.type) {
    case GET_MOVIES:
      return {
        ...state,
      };

    case GET_MOVIES_SUCCESS:
      return {
        ...state,
        moviesData: action.payload,
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
      };

    case DELETE_MOVIE_FAILURE:
      return {
        ...state,
      };

    default:
      return state;
  }
}