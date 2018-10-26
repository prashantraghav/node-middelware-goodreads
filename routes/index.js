var express = require('express');
var router = express.Router();

const goodreadsRouter = require('./goodreads')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/goodreads', goodreadsRouter);

module.exports = router;
