import React from 'react';
// import Button from '@material-ui/core/Button';

class AddMovie extends React.Component {
constructor (props) {
  super(props);

  this.state = {
    newMovieTerm: ''
  }

  this.handleChange = this.handleChange.bind(this);
  this.handleClick = this.handleClick.bind(this);
}

componentDidUpdate(){
  this.searchInput.focus();
}

handleChange(e) {
  this.setState({
    newMovieTerm: e.target.value
  })
}

handleClick() {
  this.props.handleAddClick(this.state.newMovieTerm);
  this.setState({
    newMovieTerm: ''
  });

}

render () {
  return (
    <div>
      <input ref={(input) => {this.searchInput = input;}} type="text" value={this.state.newMovieTerm} onChange={this.handleChange} placeholder="Enter new movie title..." autoFocus ></input>
      {/* <Button variant="contained" color="primary" onClick={() => this.handleClick()}>Add</Button> */}
      <button className="btn" onClick={() => this.handleClick()}>Add</button>
    </div>
  );
}
}

export default AddMovie;