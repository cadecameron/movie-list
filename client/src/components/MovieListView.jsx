import React from 'react';

class MovieListView extends React.Component {
  constructor(props) {
    super(props);

    // state (if any)
  }

  // this bindings (if any)

  // functions

  render() {
    let list = this.props.movieList.map((movie) => 
    <ul key={movie.title} className="movie">
      <li>{movie.title}</li>
    </ul>
    );

    return (
      <div className="movie-list">{list}</div>
    )
  }
}

export default MovieListView;