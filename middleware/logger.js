

function logger(req, res, next){
console.log('function complet');
next(); 
};

module.exports=logger;