var express = require('express');
var router = express.Router();
const fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/result', function(req, res, next) {
  try {
    let data = fs.readFileSync('./puppeteer/result.json', 'utf8');
    res.json(JSON.parse(data));
  } catch(e) {
    res.json({error : e.stack});
  }

});

module.exports = router;
