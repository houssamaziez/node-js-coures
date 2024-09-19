const express= require('express');
const config= require('config');

const app= express();
const products=require('./routes/product');

app.use("/api/product", products);

app.use(express.static('public'));


console.log('application name :'+config.get("name"));
console.log('mail server :'+config.get("mail.host"));
console.log('mail password :'+config.get("mail.password"));









app.listen(3000, "0.0.0.0", ()=>{
console.log('starting server ...');
});

