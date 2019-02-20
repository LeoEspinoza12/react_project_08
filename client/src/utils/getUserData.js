import axios from 'axios'

const getUser = () => {
   navigator.geolocation.getCurrentPosition((data) => {
     let user = {
       date: new Date(),
       location: {
         longitude: data.coords.longitude,
         latitude: data.coords.latitude
       },
     }

    //  axios.post('https://multi-todolist.firebaseio.com/usersMultiTodolistApp.json', user)
    //    .then(res => {
    //      console.log(res.data)
    //    })
    //    .catch(err => {
    //      // console.log(err.response)
    //    })
    // console.log('asdfasdf')
   })
   return
}
// asdasdf
export default getUser