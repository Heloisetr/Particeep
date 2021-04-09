import React, { Component, ChangeEvent, FormEvent } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import Status from 'types/StatusType';

import 'styles/dashboard.css';
import DashboardHeader from 'components/fragments/DashboardHeader';
import { MoviesAllDataContentType } from 'types/MoviesType';

export interface DispatchProps {
  getMovies: Function;
}

export interface StateProps {
  moviesData: MoviesAllDataContentType;
}

type Props = {} & DispatchProps & StateProps & RouteComponentProps;

class Dashboard extends Component<Props> {
  
  componentDidMount() {
    const { getMovies } = this.props;

    getMovies();
  }

  render() {
    const { moviesData } = this.props;

    console.log(moviesData);
    return (
      <div>
        <DashboardHeader />
      </div>
    );
  }
}

export default withRouter(Dashboard);