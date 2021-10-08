const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  name: {
    type: Date,
    required: "Enter a date for the workout"
  },
  exercises: {
    type: Array
  }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
