var express = require('express');
var router = express.Router();
const GoodreadsController = require('../src/controllers/goodreads');

/* GET users listing. */
router.get('/search', GoodreadsController.getBooks)
router.get('/books/:book_id', GoodreadsController.getBookDetails)
router.get('/authors/:author_id', GoodreadsController.getAuthorDetails)

module.exports = router;
