const express = require('express')

const router = express.Router()

router.get('/add-product', (req, res, next) => {
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add to cart</button></form>')
})

router.post('/product', (req, res, next) => {
    console.log('rrrr', req.body)
    res.redirect('/')
})


module.exports = router
