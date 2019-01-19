import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">

          <div className="header">
            <div className="brand">
              <h1>My TodoList App</h1>
            </div>
            <div className="sideNav" >
              {/* <form className="form-inline">
                <input className="form-control mr-sm-2" type="search" placeholder="Enter name" aria-label="Search" />
                <button className="btn btn-outline-dark" type="submit">Add</button>
              </form> */}
              <form className="form-inline add">
                <button className="btn btn-outline-dark" type="submit">
                  <i class="fas fa-plus fa-sm"></i> Add</button>
              </form>
                
              <div className="add">
                
              </div>
            </div>
          </div>

          <hr/>


        </div>
      </div>
    );
  }
}

export default App;
