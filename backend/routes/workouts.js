const express = require('express')

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
router.post('/', (req, res) =>{
    res.json({ msg: 'POST workout'})
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