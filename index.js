const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
const config = require('./.config');
const user = require('./controllers/user_ctrl');
const profile = require('./controllers/profile_ctrl');
const app = express();
const corsOptions = {
    origin: 'http://localhost:3888'
};

app.use(cors(corsOptions));
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(session({
    secret: 'config.sessionSecret',
    resave: false,
    saveUninitialized: false
}));
app.use(express.static(__dirname + '/public'));
console.log(__dirname)

app.post('/api/login', user.login);


app.listen(3888, function() {
    console.log('Listening on 3888 yo')
});