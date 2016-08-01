import React, { Component } from 'react';
import getThis from './utils/helpers.js';


class Search extends Component {
  // Invoked once before component mounts; returns this.state 	
  constructor(props){
    // wake up our ancestors
    super(props);
    console.log(props);

    // this is where we set our state
    this.state = {
      searchText: "",
      response: []
    };
  }
  
  // this will make the ajax call 
  handleClick(event) {
  	// THIS here is the Search class
    console.log("THIS:", this);

    //this.setState({ searchText: event.target.value });

    // this fxn imported from helpers.js 
    // it makes a get req. to nyc open data & returns with a response (res)
    getThis()
    .then((res) => {
      console.log("RES.DATA", res.data);
      this.setState({
        response: res.data  
      });
    });
  }

  // this displays what you're searching for 
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
