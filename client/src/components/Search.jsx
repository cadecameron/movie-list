import React from 'react';

class Search extends React.Component {
  constructor (props) {
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
        <button onClick={() => this.props.handleOKClick(this.state.searchTerm)}>Go!</button>
      </div>
    )
  }
}

export default Search;