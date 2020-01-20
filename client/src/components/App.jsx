import React from 'react';
import MovieListView from './MovieListView.jsx';
import Search from './Search';

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
      ],
      searchFilter: ''
    }

    this.handleOKClick = this.handleOKClick.bind(this);
  }

  handleOKClick(newSearchTerm) {
    this.setState({
      searchFilter: newSearchTerm
    });
  }

  render() {
    // compose array to store filtered list, if a search term is present
    let movieList = [];
    let searchFilter = this.state.searchFilter;
    if (searchFilter !== '') {
      movieList = this.state.movies.filter(movie => movie.title.toUpperCase().includes(searchFilter.toUpperCase()));
      movieList.length > 0 ? movieList : movieList = [{title: 'No movies to display!'}];
    } else {
      movieList = this.state.movies;
    }

    return (
      <div>
        <div>
          <h1>
            MovieList
          </h1>
        </div>
        <Search handleOKClick={this.handleOKClick} />
        <div className="container">
          <MovieListView movieList={movieList ? movieList : null} />
        </div>
      </div>
    );
  }

};

export default App;