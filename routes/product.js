 const express= require("express");
 const Joi= require("joi");
 const helmet= require('helmet');
const morgan= require('morgan');
const logger=require('../middleware/logger');
const { join } = require("path");
 const route= express.Router();
route.use(express.json());
route.use(express.urlencoded({ extended : true }));
route.use(logger);
route.use(helmet());
if (process.env.NODE_ENV==='development' ||process.env.NODE_ENV==='undefined' ){
  route.use(morgan("tiny"));


}
 

const userSchema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
  });
  

 route.get('/', (req, res)=>{
  res.send(
    'get data'
  );
  });


  route.post('/', (req, res) => {
    // Validate request body using Joi
    const { error } = userSchema.validate(req.body);
  
    // If validation fails, return 400 error with details
    if (error) {
      return res.status(400).json({
        message: "Validation error",
        details: error.details[0].message,
      });
    }
  
    // If validation passes, proceed with business logic (e.g., saving to DB)
    res.status(200).json({
      message: 'User registration successful',
      user: req.body,  // Just for demonstration; don't return raw data like this in real apps
    });
  });



module.exports=route;
