const express= require('express');

const app= express();
const products=require('./routes/product');
const home=require('./routes/home');

app.use("/api/product", products);

app.use(express.static('public'));












app.listen(3000, "0.0.0.0", ()=>{
console.log('starting server ...');
});

