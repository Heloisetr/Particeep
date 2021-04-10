import React, { PureComponent } from 'react';

import { MoviesContentType } from 'types/MoviesType';

import ratioCalculation from 'utils/ratioCalculationUtil';
import 'styles/movieCard.css';

interface Props {
  movieData: MoviesContentType;
  OnDelete: Function;
}

interface State {
  up: string;
  down: string;
}

class MovieCard extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      down: '',
      up: '',
    };
  }

  upChange = () => {
    const { up} = this.state;

    if (up === "up-active") {
      this.setState({up: ''});
    } else {
      this.setState({ up: 'up-active', down: '' });
    }
  }

  downChange = () => {
    const { down} = this.state;

    if (down === "down-active") {
      this.setState({down: ''});
    } else {
      this.setState({ down: 'down-active', up: ''});
    }
  }
  
  onDelete = (e: React.MouseEvent) => {
    const { OnDelete, movieData } = this.props;


    e.preventDefault();

    OnDelete(movieData.id);
  }

  render() {
    const { movieData } = this.props;
    const { up, down } = this.state;
    const ratio = ratioCalculation(movieData);

    return (
      <div className="movieCardContainer">
        <div className="movieCardTitle">
          <h4><strong>{movieData.title}</strong></h4>
        </div>
        <div className="movieCardCategory">
          <p>{movieData.category}</p>
        </div>
        <div className="movieCardRatio">
          <div style={{width: `${ratio}%`}} className="movieCardProgressRatio" />
        </div>
        <div>
        <p className="movieCardInfoRatio">{movieData.likes} likes / {movieData.dislikes} dislikes</p>
        </div>
        <div className="movieCardThumb">
          <i className={`fas fa-thumbs-up up ${up}`} onClick={this.upChange}></i>
          <i className={`fas fa-thumbs-down down ${down}`} onClick={this.downChange}></i>
          <i className="far fa-trash-alt trash" onClick={this.onDelete}></i>
        </div>

      </div>
    )
  }
}

export default MovieCard;