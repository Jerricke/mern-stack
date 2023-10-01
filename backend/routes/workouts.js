const express = require('express')
const Workout = require('../models/workoutModel');

const router =  express.Router()

//GET all
router.get('/', (req, res) =>{
    res.json({ msg: 'GET all workouts'})
})

//GET by id
router.get('/:id', (req, res) =>{
    res.json({ msg: 'GET one workout by ID'})
})

//POST 
router.post('/', async (req, res) =>{
    const { title, load, reps} = req.body

    try {
        const workout = await Workout.create({title, load, reps})
        res.status(200).json(workout)
    }
    catch (err) {
        res.status(400).json({ error: err.message})
    }
})

//DELETE
router.delete('/:id', (req, res) =>{
    res.json({ msg: 'DELETE a workout'})
})

//PATCH
router.patch('/:id', (req, res) =>{
    res.json({ msg: 'PATCH a workout'})
})


module.exports = router