const path = require('path');

const express = require('express');
const njwt = require('njwt');
const secureRandom = require('secure-random');

const rootDir = require('../utils/path');

const router = express.Router();

const token = { name: '', value: '' };

const users = [
    { email: "chloe@demo.com", name: "Chloe Hunt", username: "chloe", picture: "https://i.pravatar.cc/150/?img=49" },
    { email: "patrick@demo.com", name: "Patrick Russel", username: "patrick", picture: "https://i.pravatar.cc/150/?img=52" },
    { email: "alisa@demo.com", name: "Alisa Malone", username: "alisa", picture: "https://i.pravatar.cc/150/?img=47" },
    { email: "kendal@demo.com", name: "Kendal Herbert", username: "kendal", picture: "https://i.pravatar.cc/150/?img=51" }
]

const generateToken = (name) => {

    if(!name){
        console.log("User not set!");
        return null;
    }

    // get user from list
    const user = users.find((u) => u.name === name);

    // replace this with your own Weavy Identity Provider Secret
    var signingKey = 'TtLzgH#]pgq3V87H';

    var claims = {
        iss: "wijmo-weavy-hackathon",
        sub: user.username,
        dir: "hackathon",
        name: user.name,
        picture: user.picture,
        username: user.username
    }

    var jwt = njwt.create(claims, signingKey);
    jwt.setExpiration(new Date().getTime() + (60 * 60 * 1000));
    token.value = jwt.compact();
    token.name = name;
}

// Navigates to the control page
router.get('/controls', (req, res, next) => {
    res.sendFile(path.join(rootDir, './views/controls.html'));
});

// Generates JWT and redirects on 'login'
router.post('/auth-login', (req, res, next) => {
    generateToken(req.body.name);
    res.redirect('/controls');
});

router.post('/logout', (req, res, next) => {
    token.username = '';
    token.value = '';
    res.redirect('/');
})

// Returns the JWT generated
router.get('/token', (req, res, next) => {
    generateToken(token.name);
    res.send(token);
});

module.exports = router;