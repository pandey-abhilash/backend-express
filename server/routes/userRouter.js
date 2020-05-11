import express from 'express';
import dbc from '../dbc';
import user from '../validations/user'
import {register} from '../models/userModel'
var router = express.Router();

router.post('/register', async(req, res, next) =>{
  // validation
  const {error} = user.registerValidation(req.body)
  if(error){res.status(400).send(error.details[0].message)}
  
  await register(req.body).then(result=>{
    try {
      res.json(result);
    } catch (error) {
      console.log(error);
      res.status(400).send(error)
    }
  })
});

export default router;
  
