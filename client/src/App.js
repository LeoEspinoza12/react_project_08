import React, { Component } from 'react';
import './App.css';

import Backdrop from './components/Backdrop/Backdrop'

import Sample from './sample'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Backdrop />
        <div className="Content"> 
        



        <div className="NavHeader">
          <div className="container">
            <div className="Header">
              <nav className="navbar navbar-expand-lg navbar-light bg-light NavBk">
                <a className="navbar-brand" href="/">My TodoList App</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                  <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                      <a className="nav-link" href="/">Logout</a>
                    </li>
                  </ul>
                  {/* <div className="form-inline my-2 my-lg-0 addBtn">
                    <input className="form-control mr-sm-2" type="search" placeholder="Enter dashboard name" />
                    <button className="btn btn-outline-dark" type="submit">Add</button>
                  </div> */}
                  <div className="form-inline my-2 my-lg-0 addBtn">
                    <button className="btn btn-outline-dark add" type="submit">
                      <i className="fas fa-plus fa-sm"></i> Add</button> 
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
        {/* header ends */}


        <div className="container">

            {/* Signin */}
             {/* <div className="row"> 
              <div className="col-sm-4 offset-sm-4 Login">
                <form>
                  <div class="form-group">
                    <h5>Login</h5>
                    <input type="email" class="form-control" placeholder="Enter email" />
                  </div>
                  <div class="form-group">
                    <input type="password" class="form-control" placeholder="Password" />
                  </div>
                  <div class="col text-center">
                    <button type="submit" class="btn btn-primary">Submit</button>
                  </div>
                </form>
              </div>
              <div className="col-sm-4"></div>
            </div>   */}


                  {/* SignUp form */}
            {/* <div className="row"> 
              <div className="col-sm-4 offset-sm-4 Signup">
                <form>
                  <div class="form-group">
                    <h5>Sign up</h5>
                    <input type="email" class="form-control" placeholder="Enter email" />
                  </div>
                  <div class="form-group">
                    <input type="password" class="form-control" placeholder="Password" />
                  </div>
                  <div class="col text-center">
                    <button type="submit" class="btn btn-primary">Submit</button>
                  </div>
                </form>
              </div>
              <div className="col-sm-4"></div>
            </div>     */}


            {/* Spinner */}
                  <div class="sk-fading-circle">
                    <div class="sk-circle1 sk-circle"></div>
                    <div class="sk-circle2 sk-circle"></div>
                    <div class="sk-circle3 sk-circle"></div>
                    <div class="sk-circle4 sk-circle"></div>
                    <div class="sk-circle5 sk-circle"></div>
                    <div class="sk-circle6 sk-circle"></div>
                    <div class="sk-circle7 sk-circle"></div>
                    <div class="sk-circle8 sk-circle"></div>
                    <div class="sk-circle9 sk-circle"></div>
                    <div class="sk-circle10 sk-circle"></div>
                    <div class="sk-circle11 sk-circle"></div>
                    <div class="sk-circle12 sk-circle"></div>
                  </div>




              {/* Empty Dashboard */}
            {/* <div className="row"> 
              <div className="col-sm-6 offset-sm-3">
                <div class="card Empty">
                  <h5 class="card-header">Your dashboard is empty!</h5>
                </div>
              </div>
              <div className="col-sm-3"></div>
            </div>     */}


              {/* <Sample/> */}

          </div>

          

          {/* <div className="Footer">
            <div class="footer-copyright text-center py-3">© 2019 Copyright:
              <a href="/"> aimanski.com</a>
            </div>
          </div> */}

          </div>
          {/* Content */}

      </div>
    );
  }
}

export default App;
