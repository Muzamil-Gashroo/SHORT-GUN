const mongoose = require('mongoose');

const modelSchema = new mongoose.Schema({

   shortUrl:{

    type: String,
    required: true,
    unique: true,

   },
   originalUrl:{

    type: String,
    required: true,

   },
   redirectUrl:{
   
      type: String,
      required: false,
   }
   
});

const UrlModel = mongoose.model('UrlModel', modelSchema);
module.exports = UrlModel;