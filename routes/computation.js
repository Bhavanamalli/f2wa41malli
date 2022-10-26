var express = require('express');
var router = express.Router();
var x= Math.random()

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('computation', {
     title: 'computation by Bhavana',
     imul_result: 'Math.imul() applied to '+x+' is ' +Math.imul(x),
     log_result: 'Math.log() applied to '+x+' is ' +Math.log(x),
     log10_result: 'Math.log10() applied to '+x+' is ' +Math.log10(x)
    
    
    });
});

module.exports = router;
