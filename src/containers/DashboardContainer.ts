import { connect } from 'react-redux';

import Dashboard, { DispatchProps, StateProps } from 'components/dashboard/Dashboard';
import { getMovies } from 'actions/DashboardAction';

import { StateType } from 'types/ReducersType';

const mapDispatchToProps: DispatchProps = {
  getMovies,
};

const mapStateToProps = (state: StateType): StateProps => ({
  moviesData: state.dashboardState.moviesData,
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
