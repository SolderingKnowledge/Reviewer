const passport = require('passport');

module.exports = (app)=>{
    app.get('/auth/gogle', passport.authenticate('google', {//googleStrategy has internal indentifier as 'google'
        scope: ['profile', 'email'],//we're asking for profile and email
    }));


    app.get('/auth/google/callback', passport.authenticate('google'));
}



//index.js -> require('./routes/authRoutes')(app); 