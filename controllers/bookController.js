const Book = require('../models/books')
// book_index ,book_about , book_get_create , book_post_create , book_single , book_destroy

// home
const book_index = (req,res) =>{
    Book.find()
    .then((results) =>{
        res.render('books/index',{title:'Home',books:results})
    })
    .catch(err =>{
        console.log(err)
    })
}

// About
const book_about = (req,res) =>{
    res.render('books/about',{title:'About'})
}

// Create
const book_get_create = (req,res) =>{
    res.render('books/create',{title:'Create a Book'})
}

// Create Post
const book_post_create = (req,res) =>{
    const book = new Book(req.body)
    book.save()
    .then(() =>{
        res.redirect('/books')
    })
    .catch(err =>{
        console.log(err)
    })
}

// Get Single Book
const book_single = (req,res) =>{
    const id = req.params.id;
    Book.findById(id)
        .then(result =>{
            res.render('books/single',{title:result.book,book:result})
        })
        .catch(err =>{
            console.log(err)
        })
}

// Delete Book
const book_destroy = (req,res) =>{
    const id = req.params.id;

    Book.findByIdAndDelete(id)
    .then(result =>{
        res.json({redirect:'/books'})
    })
    .catch(err =>{
        console.log(err)
    })

}

module.exports = {
    book_index,
    book_about,
    book_get_create,
    book_post_create,
    book_single,
    book_destroy
}