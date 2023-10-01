const express = require('express')
const {
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController')

const router =  express.Router()

//GET all
router.get('/', getWorkouts)

//GET by id
router.get('/:id', getWorkout)

//POST 
router.post('/', createWorkout)

//DELETE
router.delete('/:id', deleteWorkout)

//PATCH
router.patch('/:id', updateWorkout)


module.exports = router