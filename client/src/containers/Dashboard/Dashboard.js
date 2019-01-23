import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import './Dashboard.css'

class Dashboard extends Component {


  render() {
    let authRedirect = null
    if(!this.props.isAuthenticated){
      authRedirect = <Redirect to='/' />
    }


    return (
      <div className="add row">
        {authRedirect}
     <div className="col-sm-4 Col">
              
              <div className="card List">
                <div className="card-body">
                  <button type="button" className="close" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                  <div className="DashHeader">

                    <h5 className="card-title">Grocery List</h5>
                    <span className="card-text date">Friday, 25th <i>January</i></span>

                    {/* <div className="input-group DashInput">
                      <input type="text" className="form-control" placeholder="Grocery List"/>
                      <div className="input-group-append">
                      <button className="btn btn-outline-secondary" type="button" aria-haspopup="true">
                      <i className="fas fa-edit fa-xs"></i>
                      </button>
                      </div>
                    </div> */}

                  </div>
                  <div className="ListSum">
                    <h5 className="card-title">10</h5>
                    <span className="card-text">Lists</span>
                  </div>
         
                  {/* <hr/> */}
                  <div className="input-group DashInput">
                    <input type="text" className="form-control"/>
                    <div className="input-group-append">
                      <button className="btn btn-outline-secondary" type="button" aria-haspopup="true">
                      <i className="fas fa-plus fa-xs"></i>
                      </button>
                    </div>
                  </div>
                    

                  <h1 className="display-4 None">No lists.</h1>

                  {/* <ul className="list-group ListGroup">
                    <li href="/" className="list-group-item list-group-item-action flex-column align-items-start">
                    <p className="mb-1">Donec id elit non mi porta gravida.</p>
                    <div className="d-flex justify-content-start Icons">
                    <small>3:43 pm</small>
                    <i className="fas fa-trash-alt fa-xs"></i>
                    </div>
                  </li> */}

                    {/* Edit Input */}
                    {/* <div className="input-group DashInput">
                      <input type="text" className="form-control" placeholder="Donec id elit non mi porta gravida at ut unum sunt ein plaquerunt." />
                      <div className="input-group-append">
                      <button className="btn btn-outline-secondary" type="button" aria-haspopup="true">
                      <i className="fas fa-plus fa-xs"></i>
                      </button>
                      </div>
                    </div> */}
                    {/* <li href="/" className="list-group-item list-group-item-action flex-column align-items-start">
                      <p className="mb-1">Donec id elit non mi porta gravida at ut unum sunt ein plaquerunt.</p>
                      <div className="d-flex justify-content-start Icons">
                      <small>3:43 pm</small>
                      <i className="fas fa-trash-alt fa-xs"></i>
                      </div>
                      </li>
                        <li href="/" className="list-group-item list-group-item-action flex-column align-items-start">
                        <p className="mb-1">Hoc calichens sanquinis eis. Acepeti et bebete vivibus verbum boulangerie plaquierunt</p>
                        <div className="d-flex justify-content-start Icons">
                        <small>3:43 pm</small>
                        <i className="fas fa-trash-alt fa-xs"></i>
                        </div>
                        </li>
                      </ul> */}

  

                </div>
              </div>
            </div>



            {/* end of row */}



             <div className="col-sm-4 Col">
              
              <div className="card List">
                <div className="card-body">
                  <button type="button" className="close" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                  <div className="DashHeader">

                    <h5 className="card-title">Grocery List</h5>
                    <span className="card-text date">Friday, 25th <i>January</i></span>

                    {/* <div className="input-group DashInput">
                      <input type="text" className="form-control" placeholder="Grocery List"/>
                      <div className="input-group-append">
                      <button className="btn btn-outline-secondary" type="button" aria-haspopup="true">
                      <i className="fas fa-edit fa-xs"></i>
                      </button>
                      </div>
                    </div> */}

                  </div>
                  <div className="ListSum">
                    <h5 className="card-title">10</h5>
                    <span className="card-text">Lists</span>
                  </div>
         
                  {/* <hr/> */}
                  <div className="input-group DashInput">
                    <input type="text" className="form-control"/>
                    <div className="input-group-append">
                      <button className="btn btn-outline-secondary" type="button" aria-haspopup="true">
                      <i className="fas fa-plus fa-xs"></i>
                      </button>
                    </div>
                  </div>
                    


                  <ul className="list-group ListGroup">
                    <li href="/" className="list-group-item list-group-item-action flex-column align-items-start">
                      <p className="mb-1">Donec id elit non mi porta gravida.</p>
                      <div className="d-flex justify-content-start Icons">
                        <small>3:43 pm</small>
                        <i className="fas fa-trash-alt fa-xs"></i>
                      </div>
                    </li>

                    {/* Edit Input */}
                    <div className="input-group DashInput">
                      <input type="text" className="form-control" placeholder="Donec id elit non mi porta gravida at ut unum sunt ein plaquerunt." />
                      <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="button" aria-haspopup="true">
                          <i className="fas fa-plus fa-xs"></i>
                        </button>
                      </div>
                    </div>
                    <li href="/" className="list-group-item list-group-item-action flex-column align-items-start">
                      <p className="mb-1">Donec id elit non mi porta gravida at ut unum sunt ein plaquerunt.</p>
                      <div className="d-flex justify-content-start Icons">
                        <small>3:43 pm</small>
                        <i className="fas fa-trash-alt fa-xs"></i>
                      </div>
                    </li>
                    <li href="/" className="list-group-item list-group-item-action flex-column align-items-start">
                      <p className="mb-1">Hoc calichens sanquinis eis. Acepeti et bebete vivibus verbum boulangerie plaquierunt</p>
                      <div className="d-flex justify-content-start Icons">
                        <small>3:43 pm</small>
                        <i className="fas fa-trash-alt fa-xs"></i>
                      </div>
                    </li>
                  </ul>

  

                </div>
              </div>
            </div>



            {/* end of row */}



             <div className="col-sm-4 Col">
              
              <div className="card List">
                <div className="card-body">
                  <button type="button" className="close" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                  <div className="DashHeader">

                    <h5 className="card-title">Grocery List</h5>
                    <span className="card-text date">Friday, 25th <i>January</i></span>

                    {/* <div className="input-group DashInput">
                      <input type="text" className="form-control" placeholder="Grocery List"/>
                      <div className="input-group-append">
                      <button className="btn btn-outline-secondary" type="button" aria-haspopup="true">
                      <i className="fas fa-edit fa-xs"></i>
                      </button>
                      </div>
                    </div> */}

                  </div>
                  <div className="ListSum">
                  
                    <h5 className="card-title">10</h5>
                    <span className="card-text">Lists</span>
                  </div>
         
                  {/* <hr/> */}
                  <div className="input-group DashInput">
                    <input type="text" className="form-control"/>
                    <div className="input-group-append">
                      <button className="btn btn-outline-secondary" type="button" aria-haspopup="true">
                      <i className="fas fa-plus fa-xs"></i>
                      </button>
                    </div>
                  </div>
                    


                  <ul className="list-group ListGroup">
                    <li href="/" className="list-group-item list-group-item-action flex-column align-items-start">
                      <p className="mb-1">Donec id elit non mi porta gravida.</p>
                      <div className="d-flex justify-content-start Icons">
                        <small>3:43 pm</small>
                        <i className="fas fa-trash-alt fa-xs"></i>
                      </div>
                    </li>
                 
                    <li href="/" className="list-group-item list-group-item-action flex-column align-items-start">
                      <p className="mb-1">Donec id elit non mi porta gravida at ut unum sunt ein plaquerunt.</p>
                      <div className="d-flex justify-content-start Icons">
                        <small>3:43 pm</small>
                        <i className="fas fa-trash-alt fa-xs"></i>
                      </div>
                    </li>

                    <li href="/" className="list-group-item list-group-item-action flex-column align-items-start">
                      <p className="mb-1">Donec id elit non mi porta gravida at ut unum sunt ein plaquerunt.</p>
                      <div className="d-flex justify-content-start Icons">
                        <small>3:43 pm</small>
                        <i className="fas fa-trash-alt fa-xs"></i>
                      </div>
                    </li>

                    <li href="/" className="list-group-item list-group-item-action flex-column align-items-start">
                      <p className="mb-1">Donec id elit non mi porta gravida at ut unum sunt ein plaquerunt.</p>
                      <div className="d-flex justify-content-start Icons">
                        <small>3:43 pm</small>
                        <i className="fas fa-trash-alt fa-xs"></i>
                      </div>
                    </li>

                    <li href="/" className="list-group-item list-group-item-action flex-column align-items-start">
                      <p className="mb-1">Donec id elit non mi porta gravida at ut unum sunt ein plaquerunt.</p>
                      <div className="d-flex justify-content-start Icons">
                        <small>3:43 pm</small>
                        <i className="fas fa-trash-alt fa-xs"></i>
                      </div>
                    </li>

                    <li href="/" className="list-group-item list-group-item-action flex-column align-items-start">
                      <p className="mb-1">Hoc calichens sanquinis eis. Acepeti et bebete vivibus verbum boulangerie plaquierunt</p>
                      <div className="d-flex justify-content-start Icons">
                        <small>3:43 pm</small>
                        <i className="fas fa-trash-alt fa-xs"></i>
                      </div>
                    </li>
                  </ul>

  

                </div>
              </div>
            </div>



            {/* end of row */}



            <div className="col-sm-4 Col">
              
              <div className="card List">
                <div className="card-body">
                  <button type="button" className="close" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                  <div className="DashHeader">

                    <h5 className="card-title">Grocery List</h5>
                    <span className="card-text date">Friday, 25th <i>January</i></span>

                    {/* <div className="input-group DashInput">
                      <input type="text" className="form-control" placeholder="Grocery List"/>
                      <div className="input-group-append">
                      <button className="btn btn-outline-secondary" type="button" aria-haspopup="true">
                      <i className="fas fa-edit fa-xs"></i>
                      </button>
                      </div>
                    </div> */}

                  </div>
                  <div className="ListSum">
                    <h5 className="card-title">10</h5>
                    <span className="card-text">Lists</span>
                  </div>
         
                  {/* <hr/> */}
                  <div className="input-group DashInput">
                    <input type="text" className="form-control"/>
                    <div className="input-group-append">
                      <button className="btn btn-outline-secondary" type="button" aria-haspopup="true">
                      <i className="fas fa-plus fa-xs"></i>
                      </button>
                    </div>
                  </div>
                    


                  <ul className="list-group ListGroup">
                    <li href="/" className="list-group-item list-group-item-action flex-column align-items-start">
                      <p className="mb-1">Donec id elit non mi porta gravida.</p>
                      <div className="d-flex justify-content-start Icons">
                        <small>3:43 pm</small>
                        <i className="fas fa-trash-alt fa-xs"></i>
                      </div>
                    </li>
                 
                    <li href="/" className="list-group-item list-group-item-action flex-column align-items-start">
                      <p className="mb-1">Donec id elit non mi porta gravida at ut unum sunt ein plaquerunt.</p>
                      <div className="d-flex justify-content-start Icons">
                        <small>3:43 pm</small>
                        <i className="fas fa-trash-alt fa-xs"></i>
                      </div>
                    </li>
                    
                    <li href="/" className="list-group-item list-group-item-action flex-column align-items-start">
                      <p className="mb-1">Hoc calichens sanquinis eis. Acepeti et bebete vivibus verbum boulangerie plaquierunt</p>
                      <div className="d-flex justify-content-start Icons">
                        <small>3:43 pm</small>
                        <i className="fas fa-trash-alt fa-xs"></i>
                      </div>
                    </li>
                  </ul>

  

                </div>
              </div>
            </div>



            {/* end of row */}



            <div className="col-sm-4 Col">
              
              <div className="card List">
                <div className="card-body">
                  <button type="button" className="close" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                  <div className="DashHeader">

                    <h5 className="card-title">Grocery List</h5>
                    <span className="card-text date">Friday, 25th <i>January</i></span>

                    {/* <div className="input-group DashInput">
                      <input type="text" className="form-control" placeholder="Grocery List"/>
                      <div className="input-group-append">
                      <button className="btn btn-outline-secondary" type="button" aria-haspopup="true">
                      <i className="fas fa-edit fa-xs"></i>
                      </button>
                      </div>
                    </div> */}

                  </div>
                  <div className="ListSum">
                    <h5 className="card-title">10</h5>
                    <span className="card-text">Lists</span>
                  </div>
         
                  {/* <hr/> */}
                  <div className="input-group DashInput">
                    <input type="text" className="form-control"/>
                    <div className="input-group-append">
                      <button className="btn btn-outline-secondary" type="button" aria-haspopup="true">
                      <i className="fas fa-plus fa-xs"></i>
                      </button>
                    </div>
                  </div>
                    


                  <ul className="list-group ListGroup">
                    <li href="/" className="list-group-item list-group-item-action flex-column align-items-start">
                      <p className="mb-1">Donec id elit non mi porta gravida.</p>
                      <div className="d-flex justify-content-start Icons">
                        <small>3:43 pm</small>
                        <i className="fas fa-trash-alt fa-xs"></i>
                      </div>
                    </li>
                 
                    {/* <li href="/" className="list-group-item list-group-item-action flex-column align-items-start">
                      <p className="mb-1">Donec id elit non mi porta gravida at ut unum sunt ein plaquerunt.</p>
                      <div className="d-flex justify-content-start Icons">
                        <small>3:43 pm</small>
                        <i className="fas fa-trash-alt fa-xs"></i>
                      </div>
                    </li>
                    
                    <li href="/" className="list-group-item list-group-item-action flex-column align-items-start">
                      <p className="mb-1">Hoc calichens sanquinis eis. Acepeti et bebete vivibus verbum boulangerie plaquierunt</p>
                      <div className="d-flex justify-content-start Icons">
                        <small>3:43 pm</small>
                        <i className="fas fa-trash-alt fa-xs"></i>
                      </div>
                    </li> */}
                  </ul>

  

                </div>
              </div>
            </div>



            {/* end of row */}




               <div className="col-sm-4 Col">
              
              <div className="card List">
                <div className="card-body">
                  <button type="button" className="close" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                  <div className="DashHeader">

                    <h5 className="card-title">Grocery List</h5>
                    <span className="card-text date">Friday, 25th <i>January</i></span>

                    {/* <div className="input-group DashInput">
                      <input type="text" className="form-control" placeholder="Grocery List"/>
                      <div className="input-group-append">
                      <button className="btn btn-outline-secondary" type="button" aria-haspopup="true">
                      <i className="fas fa-edit fa-xs"></i>
                      </button>
                      </div>
                    </div> */}

                  </div>
                  <div className="ListSum">
                    <h5 className="card-title">10</h5>
                    <span className="card-text">Lists</span>
                  </div>
         
                  {/* <hr/> */}
                  <div className="input-group DashInput">
                    <input type="text" className="form-control"/>
                    <div className="input-group-append">
                      <button className="btn btn-outline-secondary" type="button" aria-haspopup="true">
                      <i className="fas fa-plus fa-xs"></i>
                      </button>
                    </div>
                  </div>
                    


                  <ul className="list-group ListGroup">
                    <li href="/" className="list-group-item list-group-item-action flex-column align-items-start">
                      <p className="mb-1">Donec id elit non mi porta gravida.</p>
                      <div className="d-flex justify-content-start Icons">
                        <small>3:43 pm</small>
                        <i className="fas fa-trash-alt fa-xs"></i>
                      </div>
                    </li>
                 
                    <li href="/" className="list-group-item list-group-item-action flex-column align-items-start">
                      <p className="mb-1">Donec id elit non mi porta gravida at ut unum sunt ein plaquerunt.</p>
                      <div className="d-flex justify-content-start Icons">
                        <small>3:43 pm</small>
                        <i className="fas fa-trash-alt fa-xs"></i>
                      </div>
                    </li>

                    <li href="/" className="list-group-item list-group-item-action flex-column align-items-start">
                      <p className="mb-1">Donec id elit non mi porta gravida at ut unum sunt ein plaquerunt.</p>
                      <div className="d-flex justify-content-start Icons">
                        <small>3:43 pm</small>
                        <i className="fas fa-trash-alt fa-xs"></i>
                      </div>
                    </li>

                    <li href="/" className="list-group-item list-group-item-action flex-column align-items-start">
                      <p className="mb-1">Donec id elit non mi porta gravida at ut unum sunt ein plaquerunt.</p>
                      <div className="d-flex justify-content-start Icons">
                        <small>3:43 pm</small>
                        <i className="fas fa-trash-alt fa-xs"></i>
                      </div>
                    </li>

                    <li href="/" className="list-group-item list-group-item-action flex-column align-items-start">
                      <p className="mb-1">Donec id elit non mi porta gravida at ut unum sunt ein plaquerunt.</p>
                      <div className="d-flex justify-content-start Icons">
                        <small>3:43 pm</small>
                        <i className="fas fa-trash-alt fa-xs"></i>
                      </div>
                    </li>

                    <li href="/" className="list-group-item list-group-item-action flex-column align-items-start">
                      <p className="mb-1">Hoc calichens sanquinis eis. Acepeti et bebete vivibus verbum boulangerie plaquierunt</p>
                      <div className="d-flex justify-content-start Icons">
                        <small>3:43 pm</small>
                        <i className="fas fa-trash-alt fa-xs"></i>
                      </div>
                    </li>
                  </ul>

  

                </div>
              </div>
            </div>

          

            {/* end of row */}
      </div>
  )}
}

const mapStateToProps = (state, ownProps) => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  }
}

export default connect(mapStateToProps)(Dashboard)