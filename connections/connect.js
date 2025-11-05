require('dotenv').config();

const mongoose = require('mongoose');

const URL = process.env.URL;

const connectDB = async () => { 

    try{

        await mongoose.connect(URL);
        console.log("DB-Connected");
        
        
    }catch(err){console.log(err);}


};

module.exports = connectDB;