import { connect } from 'react-redux';

import Dashboard, { DispatchProps, StateProps } from 'components/dashboard/Dashboard';
import { getMovies, deleteMovie, changeItemsPage, sendDataPagination, sendFilterData } from 'actions/DashboardAction';

import { StateType } from 'types/ReducersType';

const mapDispatchToProps: DispatchProps = {
  getMovies,
  deleteMovie,
  changeItemsPage,
  sendDataPagination,
  sendFilterData,
};

const mapStateToProps = (state: StateType): StateProps => ({
  moviesData: state.dashboardState.moviesData,
  itemsPage: state.dashboardState.itemsPage,
  totalNumber: state.dashboardState.totalNumber,
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
