const Workout = require('../models/workoutModel');
const woController = {}

woController.addRoutine = async (req, res, next) => {
    console.log('in add routine')
    console.log(req.body)
    const newRoutine = req.body.routine
    const day = req.body.day
    try{
    const doc = await Workout.create({day : day, routine : newRoutine})
    next()
    } catch(error){
        console.log('error in add routine')
        next(error)
    }
}

woController.findRoutine = async (req, res, next) => {
    console.log('in find routine', req.params);
    const day = req.params.day
    try{
    const reqdObj = await Workout.findOne(day)
    res.locals.routine = reqdObj
    next()
    } catch(error){
        console.log('error in find routine')
        next(error)
    }
}
module.exports = woController;
