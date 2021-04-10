import React, { Component, ChangeEvent, FormEvent } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import Status from 'types/StatusType';

import 'styles/dashboard.css';
import DashboardHeader from 'components/fragments/DashboardHeader';
import { MoviesAllDataContentType, MoviesContentType } from 'types/MoviesType';
import MovieCard from 'components/fragments/MovieCard';

export interface DispatchProps {
  getMovies: Function;
  deleteMovie: Function;
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

  onDelete = (movieId: string) => {
    const { deleteMovie } = this.props;


    deleteMovie(movieId);
  }

  displayMovies = () => {
    const { moviesData } = this.props;

    return (
      moviesData.movies.map((movie: MoviesContentType, index) => {
        return (
          <div key={index} className="dashboardCardContainer">
            <MovieCard movieData={movie} OnDelete={this.onDelete}/>
          </div>
        );
      })
    );
  }

  render() {
    const { moviesData } = this.props;

    console.log(moviesData);
    return (
      <div>
        <DashboardHeader />
        <div className="dashboardContainer">
          <div className="dashboardCard">
            {this.displayMovies()}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Dashboard);