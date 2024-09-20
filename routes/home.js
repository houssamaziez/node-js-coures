const express= require("express");
const route= express.Router();
const config= require('config');



console.log("beforte");
const data= getUser(1, function callback(user) {
    console.log("user", user);
}) ;

console.log('after');

console.log('application name :'+config.get("name"));
console.log('mail server :'+config.get("mail.host"));
console.log('mail password :'+config.get("mail.password"));



function getUser(id , callback) {

    setTimeout( ()=>{

        console.log('start login');
callback({id:id, name:"houqq"});

    } , 2000);


    
}