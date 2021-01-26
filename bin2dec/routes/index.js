var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {binary:"", decimal: "", errormessage: null});
});

router.post('/', function(req, res, next) {
  var binary = req.body.binary
  try {
    var result = bin2dec(binary)
  }
  catch(e)
  {
    res.render('index', {binary: binary, decimal: "", errormessage: e})
  }
  res.render('index', {binary: binary, decimal: result, errormessage: null})
})

function bin2dec(binary) {
  let result = 0
  let exp = binary.length-1

  if (!(/^[01]+$/.test(binary)))
  {
      throw  `${binary} is an invalid binary format, the chars informed must be just 0 or 1`
  }

  console.log(`Binary = ${binary}`)
  for (i=0;i<=binary.length-1;i++)
  {
      console.log(binary.charAt(i) + ' * ' + '2^' + exp + '(' + Math.pow(2, exp) + ')')
      result += binary.charAt(i) * Math.pow(2, exp)
      exp--
  }
  console.log(`Decimal = ${result}`)
  return result
}

module.exports = router;
