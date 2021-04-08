import { call, takeLatest, put } from 'redux-saga/effects';

import {
  getMoviesSuccess,
  getMoviesFailure,
  GET_MOVIES,
} from 'actions/DashboardAction';

import { MoviesAllDataContentType } from 'types/MoviesType';
import getMoviesCategories from 'utils/moviesUtils';
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

export default function* dashboardSaga() {
  yield takeLatest(GET_MOVIES, getMoviesFunction);
}