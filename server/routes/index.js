import express from 'express';
var router = express.Router();
// ..stuff below

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json( { title: 'Express' });
});

export default router;
  
