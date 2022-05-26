const Workout = require('../models/workoutModel');
const woController = {}

woController.addRoutine = async (req, res, next) => {
    console.log('in add routine')
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
    try{
    const reqdObj = await Workout.findOne(req.params)
    res.locals.routine = reqdObj
    next()
    } catch(error){
        console.log('error in find routine')
        next(error)
}}

module.exports = woController;
