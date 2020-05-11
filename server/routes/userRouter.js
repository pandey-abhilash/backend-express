import express from 'express';

import user from '../validations/user'
var router = express.Router();

/* GET home page. */
router.post('/register', function(req, res, next) {
  const {error} = user.registerValidation(req.body)
  if(error){res.status(400).send(error.details[0].message)}
  try {
    res.json({ title: 'user' });
  } catch (error) {
    res.status(400).send(error)
  }

});

export default router;
  
