const p = new Promise((resolve,reject )=>{

reject(Error("message error"))

});

p.then((value) => console.log(value)).catch((err)=>console.log('error', err.message));