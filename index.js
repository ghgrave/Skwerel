require('dotenv').config()
const express = require ("express")
const app = express()
app.use(express.static('public'))
app.set("view engine", "ejs")

const movies = require('./data/fakeData.json')

// ROUTING
app.get('/', (req, res)=>{
  res.redirect('/landing')
})

app.get('/landing', (req, res)=>{
  res.render("landing", {movies})
})



const port = process.env.PORT || 3000
app.listen(port, ()=> console.log(`App listening on port ${port}`))