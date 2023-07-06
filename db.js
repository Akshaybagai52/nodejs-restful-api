var mongoose = require('mongoose');

const datadb = mongoose.connect('mongodb://127.0.0.1:27017/myapp').then(()=>{
    console.log("connected to mongodb");
}).catch(()=>{
    console.log("not connected");
});
module.exports = datadb;                   