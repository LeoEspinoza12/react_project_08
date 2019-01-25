import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {isEmpty} from '../../utils/Validation'
import DashboardList from './DashboardLists/DashboardLists'
import Fragment from '../../utils/Fragment'
import './Dashboard.css'

class Dashboard extends Component {


  render() {
  let authRedirect = null
  if(!this.props.isAuthenticated){
    authRedirect = <Redirect to='/' />
  }

  let dashboard = this.props.dashboards
  let dashboardItems = null
  if(isEmpty(dashboard.dashboard)){
    dashboardItems = 
    <Fragment>
      <div className="col-sm-6 offset-sm-3">
        <div className="card Empty">
        <h5 className="card-header">
          {dashboard.mesg ? dashboard.mesg.message : ''}
        </h5>
        </div>
      </div>
      <div className="col-sm-3"></div>
    </Fragment>

  } else {
   dashboardItems = dashboard.dashboard.map((dashItem,i )=> {
      return <DashboardList 
              key={i}
              dashItem={dashItem}/>
    })
  }
  return (
    <div className="add row">
      {authRedirect}
      {dashboardItems}


    


















































   
      {/* second row */}
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


      </div>
  )}
}

const mapStateToProps = (state, ownProps) => {
  return {
    dashboards: state.dashboard,
    isAuthenticated: state.auth.isAuthenticated
  }
}

export default connect(mapStateToProps)(Dashboard)