const express = require('express')
const {
    createWorkout,
    getWorkouts,
    getWorkout
} = require('../controllers/workoutController')

const router =  express.Router()

//GET all
router.get('/', getWorkouts)

//GET by id
router.get('/:id', getWorkout)

//POST 
router.post('/', createWorkout)

//DELETE
router.delete('/:id', (req, res) =>{
    res.json({ msg: 'DELETE a workout'})
})

//PATCH
router.patch('/:id', (req, res) =>{
    res.json({ msg: 'PATCH a workout'})
})


module.exports = router