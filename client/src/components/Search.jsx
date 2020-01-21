import React from 'react';
// import Button from '@material-ui/core/Button';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: ''
    }

    this.onSearchChange = this.onSearchChange.bind(this);

  }

  onSearchChange(event) {
    // console.log(event.target.value);
    this.setState({
      searchTerm: event.target.value
    });
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="Enter search term..." onChange={this.onSearchChange}></input>
        {/* <Button variant="contained" color="primary" onClick={() => this.props.handleOKClick(this.state.searchTerm)}>Go!</Button> */}
        <button className="btn" onClick={() => this.props.handleOKClick(this.state.searchTerm)}>Go!</button>
      </div>
    )
  }
}

export default Search;