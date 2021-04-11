import React, { Component } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import 'styles/dashboard.css';

import Filter from 'assets/filter.png';

import DashboardHeader from 'components/fragments/DashboardHeader';
import { MoviesAllDataContentType, MoviesContentType } from 'types/MoviesType';
import MovieCard from 'components/fragments/MovieCard';
import Pagination from 'components/fragments/Pagination';

export interface DispatchProps {
  getMovies: Function;
  deleteMovie: Function;
  changeItemsPage: Function;
  sendDataPagination: Function;
  sendFilterData: Function;
}

export interface StateProps {
  moviesData: MoviesAllDataContentType;
  itemsPage: number;
  totalNumber: number;
}

export interface State {
  filterIsOpen: boolean;
  inputCheckbox: string[];
}

type Props = {} & DispatchProps & StateProps & RouteComponentProps;

class Dashboard extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      filterIsOpen: false,
      inputCheckbox: [],
    };
  }

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

  onChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { changeItemsPage } = this.props;

    e.preventDefault();

    changeItemsPage(Number(e.currentTarget.value));
  }

  getDataPagination = (pageNumber: number) => {
    const { sendDataPagination, itemsPage } = this.props;

    let countElementPage = (pageNumber - 1) * itemsPage;
    sendDataPagination(countElementPage);
  }

  filterOpen = () => {
    const { filterIsOpen } = this.state;

    this.setState({ filterIsOpen: !filterIsOpen });
  }

  handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { inputCheckbox } = this.state;
    const { sendFilterData } = this.props;

    let checkedTmp: string[] = inputCheckbox;

    if (!checkedTmp.includes(e.target.name)) {
      checkedTmp.push(e.target.name);
    } else {
      const index = checkedTmp.indexOf(e.target.name);
      checkedTmp.splice(index, 1);
    }
    this.setState({ inputCheckbox: checkedTmp });

    sendFilterData(inputCheckbox);
  }

  categoriesFilter = () => {
    const { moviesData } = this.props;
    const { inputCheckbox } = this.state;

    return moviesData.categories.map((category, index) => {
      return (
        <div className="dashboardFilterCheckbox" key={index}>
          <label>
            <input
              className="input"
              name={category}
              type="checkbox"
              checked={inputCheckbox.includes(category)}
              onChange={this.handleCheckbox}
            />
            {category}
          </label>
        </div>
      );
    });
  }

  render() {
    const { itemsPage, totalNumber } = this.props;
    const { filterIsOpen } = this.state;
    const pagination = Math.ceil(totalNumber / itemsPage);

    return (
      <div>
        <DashboardHeader />
        <div className="DashboardContainer">
          <div className="dashboardElementChoice">
            <p>Combien d'éléments par page voulez-vous ?</p>
            <button className="dashboardButton" value="4" onClick={this.onChange}>4</button>
            <button className="dashboardButton" value="8" onClick={this.onChange}>8</button>
            <button className="dashboardButton" value="12" onClick={this.onChange}>12</button>
          </div>
          <div className="dashboardFilterActivation" onClick={() => {this.filterOpen()}}>
            <img className="dashboardFilterImg" src={Filter} alt="filter"/>
            <p className="dashboardFilterName">Filtres</p>
          </div>
          { filterIsOpen && (
              <div className="dashboardFilterContainer">
                <div className="dashboardFilterInput">
                  {this.categoriesFilter()}
                </div>
              </div>
          )}
          <div className="dashboardCard">
            {this.displayMovies()}
          </div>
        </div>
        <Pagination pagination={pagination} getDataPagination={this.getDataPagination}/>
      </div>
    );
  }
}

export default withRouter(Dashboard);