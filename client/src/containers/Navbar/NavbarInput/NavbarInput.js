import React, { Component } from 'react'
import Fragment from '../../../utils/Fragment'

class NavbarInput extends Component {

  constructor(){
    super();
    this.state ={
      addBtnClick: true,
      dashItem: ''
    }

    
  }





  render() {
  
    let addBtn = <li className="nav-item">
                    <div className="form-inline my-2 my-lg-0">
                    <button 
                      className="btn btn-outline-dark add">
                    <i className="fas fa-plus fa-sm"></i> Add</button> 
                    </div>
                  </li>

if(this.state.addBtnClick){
  addBtn = <li className="nav-item">
                <div className="form-inline my-2 my-lg-0 addBtn">
                <input 
                  className="form-control mr-sm-2" 
                  placeholder="Enter dashboard name" />
                <button 
                  disabled={true}
                  className="btn-sm btn-outline-dark add">
                  <i className="fas fa-plus fa-sm"></i> Add</button>
                </div>
              </li>
    }

    return (
      <Fragment>
        {addBtn}
      </Fragment>
    )
  }
}

export default NavbarInput