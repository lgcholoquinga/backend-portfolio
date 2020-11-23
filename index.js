if(process.env.NODE_ENV === "development"){
    require('dotenv').config();
}
//dependencies
const express = require('express');
const morgan = require('morgan');
const multer = require('multer');
const path = require('path');
const cors = require('cors');

//init
const app = express();
const database = require('./database');
//settings
app.set('port',process.env.PORT) || 4000;
//miidlewares
app.use(morgan('tiny'));
const storage = multer.diskStorage({
    destination: path.join(__dirname,'public/assets/uploads'),
    filename(req,file,cb){
        cb(null,new Date().getTime() + path.extname(file.originalname));
    },
});
app.use(multer({storage}).single('image'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors())
//Routes
app.use('/api/v1/skills',require('./routes/skill'));
//static files
app.use(express.static(path.join(__dirname,'public')));
//start the server
app.listen(app.get('port'), () =>{
    console.log("Server on port:",app.get('port'));
});