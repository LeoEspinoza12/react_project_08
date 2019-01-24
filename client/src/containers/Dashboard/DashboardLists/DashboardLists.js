import React, { Component } from 'react'
import moment from 'moment'
import Fragment from '../../../utils/Fragment'

class DashboardLists extends Component {



  render() {

    let dashboardList = this.props.dashItem
    console.log(dashboardList)
    let dashboard = 
        <div className="col-sm-4 Col">
        <div className="card List">
          <div className="card-body">
            <button type="button" className="close" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <div className="DashHeader">

              <h5 className="card-title">{dashboardList.name}</h5>
              <span className="card-text date">
                {moment(dashboardList.date).format('dddd')}, {' '}
                {moment(dashboardList.date).format('Do')} {' '}
                 <i>{moment(dashboardList.date).format('MMMM')}</i></span>

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
              <h5 className="card-title">{dashboardList.lists.length}</h5>
              <span className="card-text">
              {dashboardList.lists.length <= 1 ? 'List' : 'Lists'}
              </span>
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
          </div>
        </div>
      </div>









    return (
      <Fragment>
        {dashboard}
      </Fragment>
    )
  }
}
export default DashboardLists