import {
  GET_MOVIES,
  GET_MOVIES_SUCCESS,
  GET_MOVIES_FAILURE,
} from 'actions/DashboardAction';

import { ActionType } from 'types/ActionsType';
import { MoviesAllDataContentType } from 'types/MoviesType';

const initialState = {
  moviesData: {
    movies: [],
    categories: [],
  },
};

export interface StateType {
  moviesData: MoviesAllDataContentType;
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
      };

    case GET_MOVIES_FAILURE:
      return {
        ...state,
      };

    default:
      return state;
  }
}