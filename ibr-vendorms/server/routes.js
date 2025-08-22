var express = require('express');
var router = express.Router();
router.route('/verifyemail')
.get((req, res) => {
  res.status(200).send({
    data: "pong"
  })
});
module.exports = router;