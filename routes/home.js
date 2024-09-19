const express= require("express");
const route= express.Router();
const config= require('config');





console.log('application name :'+config.get("name"));
console.log('mail server :'+config.get("mail.host"));
console.log('mail password :'+config.get("mail.password"));

