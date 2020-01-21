import React from 'react';
import MovieListView from './MovieListView.jsx';
import Search from './Search.jsx';
import AddMovie from './AddMovie.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [
        // {title: '',
        //  watched: false, // 
        //  ...}

        { title: 'Mean Girls' },
        { title: 'Hackers' },
        { title: 'The Grey' },
        { title: 'Sunshine' },
        { title: 'Ex Machina' },
      ],
      searchFilter: '',
      watchedFilter: undefined // undefined = filter not active, true = active; only watched, false = active; only not watched
    }

    this.handleOKClick = this.handleOKClick.bind(this);
    this.handleAddClick = this.handleAddClick.bind(this);
    this.processFilters = this.processFilters.bind(this);
    this.handleWatchedClick = this.handleWatchedClick.bind(this);
  }

  handleOKClick(newSearchTerm) {
    this.setState({
      searchFilter: newSearchTerm
    });
  }

  handleAddClick(newTitle) {
    let movies = this.state.movies.slice();
    movies.push({ title: newTitle, watched: false });
    this.setState({
      movies
    });
  }


  // Toggle the state of the watched toggle on movie that was clicked on
  handleWatchedClick(e) {
    let movies = [...this.state.movies];
    let title = e.target.id;

    movies.forEach((movie) => {
      movie.title === title ? movie.watched = !movie.watched : null
    });

    this.setState({
      movies
    });
    console.log(`Watched status triggered for ${title} to ${e.target.checked}`);
  }

  // Function to create an array from the current movie list based on filtered properties in the list
  processFilters() {
    let movieList = [...this.state.movies];
    let searchFilter = this.state.searchFilter;
    let watchedFilter = this.state.watchedFilter;

    // Search field filter
    if (searchFilter !== '') {
      movieList = movieList.filter(movie => movie.title.toUpperCase().includes(searchFilter.toUpperCase()));
    }

    // Watched toggle filter
    if (watchedFilter) {
      movieList = movieList.filter(movie => (!watchedFilter) || (movie.watched === watchedFilter));
    }

    if (movieList.length === 0) {
      return null;
    }

    return movieList;
  }

  render() {
    // compose array to store filtered list, if a search term is present
    let movieList = this.processFilters();

    return (
      <div>
        <div>
          <h1>
            MovieList
          </h1>
        </div>
        <AddMovie handleAddClick={this.handleAddClick} />
        <br />
        <Search handleOKClick={this.handleOKClick} />
        <br />
        <div className="">
          <ul className="tabs s3">
            <li className="tab"><a data="true" href="#" onClick={(e)=>console.log(e)}>Watched</a></li>
            <li className="tab"><a href="#" onClick="">Unwatched</a></li>
          </ul>
        </div>

        {
          movieList ?
            <ul className="collection">
              <MovieListView movieList={movieList} handleWatchedClick={this.handleWatchedClick} />
            </ul>
            : <div>No movies to display!</div>
        }

      </div>
    );
  }

};

export default App;