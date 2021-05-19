const express = require('express')
const mongoose = require('mongoose')
const bookRouter = require('./router/bookRouter')

const app = express()

mongoose.connect(db,{useNewUrlParser:true,useUnifiedTopology:true})
.then(() => app.listen(3000))
.catch(err => console.log(err)) 


// View EJS Engine
app.set('view engine','ejs')

// Middleware & Static File
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))

// the home redirect route
app.get('/',(req,res) =>{
    res.redirect('/books')
})

// Books router
app.use('/books',bookRouter)


// Not Found
app.use((req,res) =>{
    res.status(404).render('books/404',{title:'404'})
    
})
