const userRead = require('express').Router();

const User = require('../models/modelSchema');


userRead.get('/url/:shortID', async (req, res) => { 

    const shortID = req.params.shortID;

    const data = await User.findOne({ shortUrl: shortID });

    if(!data){ return res.status(404).json('URL not found'); }

    return res.redirect(data.originalUrl);



});

module.exports = userRead;