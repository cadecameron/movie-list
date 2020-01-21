import React from 'react';
import WatchedToggle from './WatchedToggle.jsx';

class MovieListView extends React.Component {
  constructor(props) {
    super(props);

    // state (if any)
  }

  // this bindings (if any)


  render() {
    let list = this.props.movieList.map((movie) =>
      <li key={movie.title} className="collection-item avatar">
        <img src={''/* TODO */} alt="" className="circle"></img>
        <span className="title">{movie.title}</span>
        <a href="#!"
          className="secondary-content">
          <WatchedToggle
            watchedStatus={movie.watched}
            title={movie.title}
            handleWatchedClick={this.props.handleWatchedClick}
          />
        </a>
      </li>
    );

    return (
      <div className="movie-list">{list}</div>
    )
  }
}

export default MovieListView;