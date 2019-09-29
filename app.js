const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

const express = require('express');
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.urlencoded({extended: false}))

app.use(adminRoutes)

app.use(shopRoutes)

app.use((req, res) => {
    res.status(404).send('<h1>Page not found</h1>')
})

// app.get('/', (req, res) => {
//     return res.send('Bla bla bla')
// })


app.listen(3000, () => console.log('slucham slucham'));
