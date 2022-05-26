const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//const SALT_WORK_FACTOR = 10;
//const bcrypt = require('bcryptjs');

const workoutSchema = new Schema({
  day : {type: String, required: true, unique: true},
  routine: {type: Array, required: true},
});

module.exports = mongoose.model('Workout', workoutSchema);
