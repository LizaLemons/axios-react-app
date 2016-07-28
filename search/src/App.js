import React, { Component } from 'react';
import Search from './Search';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Search hello="hello from search" />
      </div>
    );
  }
}

export default App;
