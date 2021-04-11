import { takeLatest, put, select } from 'redux-saga/effects';

import {
  getMoviesSuccess,
  getMoviesFailure,
  GET_MOVIES,
  deleteMovieSuccess,
  deleteMovieFailure,
  DELETE_MOVIE,
  DELETE_MOVIE_ACTION,
  changeItemsPageSuccess,
  changeItemsPageFailure,
  CHANGE_ITEMS_PAGE,
  CHANGE_ITEMS_PAGE_ACTION,
  sendDataPaginationSuccess,
  sendDataPaginationFailure,
  SEND_DATA_PAGINATION,
  SEND_DATA_PAGINATION_ACTION,
  sendFilterDataSuccess,
  sendFilterDataFailure,
  SEND_FILTER_DATA,
  SEND_FILTER_DATA_ACTION,
} from 'actions/DashboardAction';

import { MoviesAllDataContentType } from 'types/MoviesType';
import { getMoviesWithoutDeleted } from 'utils/moviesUtils';

import { movies$ } from 'movies';

function* getMoviesFunction() {
  const { 
    dashboardState: { deletedMovies, itemsPage, offset, categoriesFilter },
  } = yield select();

  try {
    const data = yield movies$.then();
  
    if (data && data.length > 0) {
      const moviesData: MoviesAllDataContentType = getMoviesWithoutDeleted(deletedMovies, data, itemsPage, offset, categoriesFilter);

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
    dashboardState: { deletedMovies, itemsPage, offset, categoriesFilter },
  } = yield select();

  try {
    const data = yield movies$.then();
    
    if (data && data.length > 0) {
      deletedMovies.push(payload);

      
      const moviesData: MoviesAllDataContentType = getMoviesWithoutDeleted(deletedMovies, data, itemsPage, offset, categoriesFilter);
      
      yield put(deleteMovieSuccess({ movies: moviesData, deletedMovies }));
    } else { 
      yield put(deleteMovieFailure());
    }
  } catch (e) {
    yield put(deleteMovieFailure());
  }
}

function *changeItemsPageFunction(action: CHANGE_ITEMS_PAGE_ACTION) {
  const { payload } = action;
  const { 
    dashboardState: { deletedMovies, offset, categoriesFilter },
  } = yield select();

  try {
    const data = yield movies$.then();
    
    if (data && data.length > 0) {
      
      const moviesData: MoviesAllDataContentType = getMoviesWithoutDeleted(deletedMovies, data, payload, offset, categoriesFilter);
      
      yield put(changeItemsPageSuccess(moviesData));
    } else { 
      yield put(changeItemsPageFailure());
    }
  } catch (e) {
    yield put(changeItemsPageFailure());
  }
}

function* sendDataPaginationFunction(action: SEND_DATA_PAGINATION_ACTION) {
  const { payload } = action;
  const { 
    dashboardState: { deletedMovies, itemsPage, categoriesFilter },
  } = yield select();
  
  try {
    const data = yield movies$.then();
    
    if (data && data.length > 0) {
      const moviesData: MoviesAllDataContentType = getMoviesWithoutDeleted(deletedMovies, data, itemsPage, payload, categoriesFilter);
      yield put(sendDataPaginationSuccess(moviesData));
    } else {
      yield put(sendDataPaginationFailure());
    }
  } catch (e) {
    yield put(sendDataPaginationFailure());
  }
}

function* sendFilterDataFunction(action: SEND_FILTER_DATA_ACTION) {
  const { payload } = action;
  const { 
    dashboardState: { deletedMovies, itemsPage, offset },
  } = yield select();

  try {
    const data = yield movies$.then();
    
    if (data && data.length > 0) {
      const moviesData: MoviesAllDataContentType = getMoviesWithoutDeleted(deletedMovies, data, itemsPage, offset, payload);
      yield put(sendFilterDataSuccess(moviesData));
    } else {
      yield put(sendFilterDataFailure());
    }
  } catch (e) {
    yield put(sendFilterDataFailure());
  }
}

export default function* dashboardSaga() {
  yield takeLatest(GET_MOVIES, getMoviesFunction);
  yield takeLatest(DELETE_MOVIE, deleteMovieFunction);
  yield takeLatest(CHANGE_ITEMS_PAGE, changeItemsPageFunction);
  yield takeLatest(SEND_DATA_PAGINATION, sendDataPaginationFunction);
  yield takeLatest(SEND_FILTER_DATA, sendFilterDataFunction);
}