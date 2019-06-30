const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys')//don't have to put .js

const User = mongoose.model('users');//mongoose.model('users', userSchema);


passport.use(new GoogleStrategy({
    clientID: keys.googleClientId,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback',
}, (accessTaken, refreshToken, profile, done)=>{
    new User({ googleId: profile.id}).save();//when we call save()->it will save in DB
    console.log('access token: ', accessTaken);
    console.log('refresh token: ', refreshToken);
    console.log('profile: ', profile);
}));//middleware that gets used everywhere

