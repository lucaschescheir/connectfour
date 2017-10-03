import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Grid from './grid';

class App extends Component {
  render() {
      const cells=[]

      for(let y =5; y >= 0; y-- ){
          const rows= [];
          for(let x = 0; x < 7; x ++){
              rows.push(<Grid key={x} x={x} y={y} />)
          }
          cells.push(<div key={y} className="row">{rows}</div>)
      }

    return (
      <div className="App">
          <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React</h1>
          </header>
          <div id="back">
              {cells}
          </div>
      </div>
    );
  }
}

export default App;
