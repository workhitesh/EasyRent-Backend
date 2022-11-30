const express = require('express')

const Credit = require('../models/credit')
const credit = require('../models/credit')

const router = express.Router()

// All Credit Cards route
router.get('/', async (req, res) => {

    try {
        const credit = await Credit.find()
        res.jsonp(credit)
    } catch (error) {
        res.redirect('/')
    }
    res.jsonp(credit)

})

// create credit route

router.post('/create', async (req, res) => {

    const credit = new Credit({
        ownerId: req.body.ownerId,
        cardNumber: req.body.cardNumber,
        expiry: req.body.expiry,
    })
    try {
        const newCredit = await credit.save()
        res.redirect('/credit')

    } catch (error) {
        console.log('Error in User creation')
    }


})

// Update Credit

router.put('/:id', async (req, res) => {
    let credit
    try {
        credit = await Credit.findByIdAndUpdate(req.params.id,
            {
                ownerId: req.body.ownerId,
                cardNumber: req.body.cardNumber,
                expiry: req.body.expiry,
            })
        res.jsonp(credit)
    } catch (error) {
        console.log(error)
        res.redirect('/credit')
    }
})

//View single credit user
router.get('/getAll/:ownerid', async (req, res) => {
    try {
        const credit = await Credit.find({ ownerId: req.params.ownerid })
        res.jsonp(credit)
    } catch (error) {
        res.redirect('/credit')
    }

})

module.exports = router