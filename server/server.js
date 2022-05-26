const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose')
const mongoURI = 'mongodb://localhost:27017'

mongoose.connect(mongoURI);

//const db = mongoose.connections;
const userController = require('./controllers/userControllers');
const workoutController = require('./controllers/workoutController');
const { fileURLToPath } = require('url');

app.use(express.json());
app.use(express.urlencoded());
app.use('/', express.static(path.join(__dirname, '../build')));


app.post('/submitWorkout', 
  workoutController.addRoutine,
  (req, res) => {
    res.status(200).send("hello")
  }
)
app.get('/routine/:day',
  workoutController.findRoutine,
  (req, res) => {
    if (res.locals.routine === null){res.status(204).send()}
    res.status(200).send(JSON.stringify(res.locals.routine))
  }
)

app.get('/', (req, res) => {
    if (5>6){return res.status(200).sendFile(path.join(__dirname, '../index-sign-in.html'));}
    return res.status(200).sendFile(path.join(__dirname, '../index.html'));
  });

app.get('/signup', (req, res) => {
  console.log('hello')
  res.sendFile(path.join(__dirname, './index-sign-up.html'));
})

//app.post('/signup',
//  userController.createUser,
//  userController.startSesh
//)

app.post('/submit', 
  //userController.verify, 
  //userController.startSesh,
  (req, res) => {
      res.status(200).redirect('./main')
  },
)

//app.get('/main', )

app.listen(3000);