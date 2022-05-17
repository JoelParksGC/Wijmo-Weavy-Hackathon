const path = require('path');

const express = require('express');
const njwt = require('njwt');
const secureRandom = require('secure-random');

const rootDir = require('../utils/path');

const router = express.Router();

const token = { name: '', value: '' };

// Navigates to the control page
router.get('/controls', (req, res, next) => {
    res.sendFile(path.join(rootDir, './views/controls.html'));
});

// Generates JWT and redirects on 'login'
router.post('/auth-login', (req, res, next) => {
    //var signingKey = secureRandom(256, { type: 'Buffer' });
    var signingKey = 'TtLzgH#]pgq3V87H';
    
    var claims = {
        iss: "wijmo-weavy-hackathon",
        sub: req.body.username,
        dir: "hackathon",
        name: req.body.username,
        //username: ""
    }

    var jwt = njwt.create(claims, signingKey);
    jwt.setExpiration(new Date().getTime() + (60*60*1000));
    token.value = jwt.compact();
    token.name = req.body.username;
    res.redirect('/controls');
});

router.post('/logout', (req, res, next) => {
    token.name = '';
    token.value = '';
    res.redirect('/');
})

// Returns the JWT generated
router.get('/token', (req, res, next) => {
    res.send(token);
});

module.exports = router;