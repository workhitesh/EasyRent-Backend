const express = require('express')

const Users = require('../models/users')
const users = require('../models/users')

const router = express.Router()

// All users route
router.get('/', async (req, res) => {

    try {
        const users = await Users.find()
        res.jsonp(users)
    } catch (error) {
        res.redirect('/')
    }
    res.jsonp(users)

})

// create users route

router.post('/create', async (req, res) => {

    const users = new Users({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        profilePic: req.body.profilePic,
        email: req.body.email,
        password: req.body.password,
    })
    try {
        const newUser = await users.save()
        res.redirect('/users')

    } catch (error) {
        console.log('Error in User creation')
    }


})

// Update Users
router.put('/:id', async (req, res) => {
    let user
    try {
        user = await Users.findByIdAndUpdate(req.params.id,
            {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                profilePic: req.body.profilePic,
                email: req.body.email,
                password: req.body.password,
            })
        res.jsonp(user)
    } catch (error) {
        console.log(error)
        res.redirect('/users')
    }
})


//View single user
router.get('/:id', async (req, res) => {
    try {
        const users = await Users.findById(req.params.id)
        res.jsonp(users)
    } catch (error) {
        res.redirect('/users')
    }

})

module.exports = router

// router.get('/:email', async (req, res) => {
//     console.log(req.params.email)
//     try {
//         const users = await Users.find({ email: req.params.email })
//         res.jsonp(users)
//     } catch (error) {
//         res.redirect('/users')
//     }

// })