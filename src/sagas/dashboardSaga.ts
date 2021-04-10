import { takeLatest, put, select } from 'redux-saga/effects';

import {
  getMoviesSuccess,
  getMoviesFailure,
  GET_MOVIES,
  deleteMovieSuccess,
  deleteMovieFailure,
  DELETE_MOVIE,
  DELETE_MOVIE_ACTION,
} from 'actions/DashboardAction';

import { MoviesAllDataContentType } from 'types/MoviesType';
import { getMoviesCategories, getMoviesWithoutDeleted } from 'utils/moviesUtils';

import { movies$ } from 'movies';

function* getMoviesFunction() {
  try {
    const data = yield movies$.then();
  
    if (data && data.length > 0) {
      const moviesData: MoviesAllDataContentType = {
        movies: data,
        categories: getMoviesCategories(data),
      }
      yield put(getMoviesSuccess(moviesData))
    } else {
      yield put(getMoviesFailure());
    }
  } catch (e) {
    yield put(getMoviesFailure());
  }
}

function* deleteMovieFunction(action: DELETE_MOVIE_ACTION) {
  const { payload } = action;
  const { 
    dashboardState: { deletedMovies },
  } = yield select();

  try {
    
    const data = yield movies$.then();
    if (data && data.length > 0) {
      deletedMovies.push(payload);
      
      const moviesData: MoviesAllDataContentType = getMoviesWithoutDeleted(deletedMovies, data);
      
      yield put(deleteMovieSuccess({ movies: moviesData, deletedMovies }));
    } else { 
      yield put(deleteMovieFailure());
    }
  } catch (e) {
    console.log("test")
    yield put(deleteMovieFailure());
  }
  
}

export default function* dashboardSaga() {
  yield takeLatest(GET_MOVIES, getMoviesFunction);
  yield takeLatest(DELETE_MOVIE, deleteMovieFunction);
}