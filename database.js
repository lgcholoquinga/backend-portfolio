const mongoose  = require('mongoose');

mongoose.connect(process.env.MONGODB_URI,{
    useNewUrlParser: true,
}).then(db => console.log("db is conected..."))
  .catch(err => console.log(new Error(err)));