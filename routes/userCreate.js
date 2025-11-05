
const shortUrl = require('express').Router();

require('dotenv').config();

const redirectURL = process.env.REDIRECT_URL || 'http://localhost:3000/';

const shortID = require('short-id');

const User = require('../models/modelSchema');

shortUrl.post('/url', async (req, res) => {

    try{

        const url = req.body.URL;

        if(!url){ return res.status(400).json('URL is required'); }

        const shortUrl = shortID.generate();

        const NewUrl = await User.create({ 
            
            shortUrl: shortUrl, originalUrl: url , redirectUrl: `Short URL : ${redirectURL}read/url/${shortUrl}`
        
        });

        return res.status(201).json(NewUrl);


    }catch(err){console.error(err);};

});

module.exports = shortUrl;


