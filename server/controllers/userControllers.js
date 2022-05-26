const User = require('../models/userModel');


const userController = {}

userController.createUser = async (req, res, next) => {
    // write code here req.body = {username : , password : }
  console.log('creating users')
  const newUserInfo = {username : req.body.username, password : req.body.password}
  const newUser = new User(newUserInfo)
  newUser.save()
    .then(info => {
      return next()
    })
    .catch(err => {
      return next (err)
    })
  }

userController.verify = async ( req, res, next) => {
  const userInfo = {username : req.body.username, password : req.body.password}
  try{
    const currUser = await User.find(userInfo)
    res.locals.user = currUser.id
    next()
} catch{
  next(err)
}

userController.findUser = async (req, res, next) => {
    const userInfo = {username : req.body.username, password : req.body.password}
    res.locals.user = await User.find(userInfo)
        return next()
    }
}

module.exports = userController;
