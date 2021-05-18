const express = require('express')
const bookController = require('../controllers/bookController')

const router = express.Router()

// the all books router
router.get('/',bookController.book_index)

// About page
router.get('/about',bookController.book_about)

//Create Page
router.get('/create',bookController.book_get_create)

// Create Book
router.post('/',bookController.book_post_create)

// get single Book details
router.get('/:id',bookController.book_single)

// delete book
router.delete('/:id',bookController.book_destroy)

module.exports = router;