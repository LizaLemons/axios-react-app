import React, { Component } from 'react';
import getThis from './utils/helpers.js';


class Search extends Component {
  constructor(props){
    super(props);
    console.log(props);
    this.state = {
      searchText: "",
      response: []
    };
  }
  handleClick(event) {
    console.log(this);
    //this.setState({ searchText: event.target.value });
    getThis()
    .then((res) => {
      this.setState({
        response: res.data
      });
      console.log(res.data);
    });
  }
  handleChange(event){
    console.log(event.target.value);
    this.setState({ searchText: event.target.value });
  }
  render(){
    const restaurants = this.state.response;
    const index = 0;
    return (
      <div>
        <h1>{this.props.hello}</h1>
        <input placeholder="search"
          onChange={this.handleChange.bind(this)} />
        <button onClick={this.handleClick.bind(this)}>go</button>
        <h3>{this.state.searchText}</h3>
        <ol>
          {restaurants.map(function (restaurant) {
            return <li key={restaurant.phone}>{restaurant.dba}</li>
          })}
        </ol>
      </div>
    );
  }
}

export default Search;
