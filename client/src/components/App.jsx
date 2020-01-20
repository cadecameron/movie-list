import React from 'react';
import MovieListView from './MovieListView.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [
        { title: 'Mean Girls' },
        { title: 'Hackers' },
        { title: 'The Grey' },
        { title: 'Sunshine' },
        { title: 'Ex Machina' },
      ]
    }
  }





  render() {
    return (
      <div>
        <div>
          <h1>
            MovieList
          </h1>
        </div>
        <div id="list">
          <MovieListView movies={this.state.movies}/>
        </div>
      </div>
    );
  }

};

export default App;