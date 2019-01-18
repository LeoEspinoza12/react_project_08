

const express = require('express');
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const passport = require('passport')

const users = require('./routes/users');
const lists = require('./routes/lists');
const dashboard = require('./routes/dashboard');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())


const db = require('./config/keys').mongoURI

mongoose
  .connect(db, {useNewUrlParser: true})
    .then(() => console.log('MongoDB is Connected'))
      .catch(err => console.log(err))

// initialize passport for the protected routes
app.use(passport.initialize())
// require the passport that is set up in the config file
require('./config/passport')(passport)


app.use('/api/users', users);
app.use('/api/lists', lists);
app.use('/api/dashboard', dashboard);


const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server is running at port ${port}`);
})
