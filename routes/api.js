const router = require('express').Router();
const Workout = require('../models/workout.js');

router.post('/api/workouts', ({ body }, res) => {
    Workout.create(body)
        .then((dbWorkout) => {
            res.json(dbWorkout);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
});

router.put('/api/workouts/:id', (req, res) => {
    Workout.findByIdAndUpdate(
      {_id: req.params.id}, {$push:{exercises: req.body}})
        .then((dbWorkout) => {
            res.json(dbWorkout);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
});

router.get('/api/workouts', (req, res) => {
    Workout.aggregate([
        { $addFields: { totalDuration: { $sum: '$exercises.duration' } } }
    ])
        .sort({ date: -1 })
        .then((dbWorkout) => {
            res.json(dbWorkout);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
});

router.get('/api/workouts/range', (req, res) => {
    Workout.aggregate([
        { $addFields: { totalDuration: { $sum: '$exercises.duration' } } }
    ])
        .sort({ date: -1 })
        .then((dbWorkout) => {
            res.json(dbWorkout);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
});

module.exports = router;
