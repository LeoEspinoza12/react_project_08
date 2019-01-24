

import axios from 'axios'
import * as actionType from './actionTypes'

export const fetchDashboard = () => dispatch => {
  axios.get('/api/dashboard/')
    .then(res => {
      dispatch(setDashboard(res.data))
    })
    .catch(err => {
      console.log(err.response)
    })
}



export const createDashboard = (userData) => dispatch => {
  axios.post('/api/dashboard/create', userData)
    .then(res => {
      dispatch(setDashboard(res.data))
    })
    .catch(err => {
      console.log(err.response)
    })
}


export const setDashboard = (data) => {
  return {
    type: actionType.DASHBOARD_CREATE,
    payload: data
  }
}
