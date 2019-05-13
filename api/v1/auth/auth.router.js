const express = require('express');
const router = express.Router();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const {
	GOOGLE_CLIENT_ID,
	GOOGLE_CLIENT_SECRET,
	GOOGLE_CALLBACK_URL
} = require('../../../config');

// import mongoose models
const User = require('../users/users.model');

router.use(passport.initialize());

passport.use(new GoogleStrategy({
	clientID: GOOGLE_CLIENT_ID,
	clientSecret: GOOGLE_CLIENT_SECRET,
	callbackURL: GOOGLE_CALLBACK_URL,
	passReqToCallback: true
}, (req, accessToken, refreshToken, profile, done) => {
	User.findOne({ userId: profile.id }, (err, user) => {
		if (err) {
			return done(err);
		}
		// No user was found...so create a new user with values from Google
		if (!user) {
			user = new User({
				userId: profile.id,
				userName: profile.displayName,
				profileImage: profile.picture,
				tags: [],
				notifications: []
			});
			user.save(err => {
				if (err) console.log(err);
				return done(err, user);
			});
		} else {
			// user found, return
			return done(err, user);
		}
	});
}));

router.get('/google', passport.authenticate('google', {
	scope: [
		'https://www.googleapis.com/auth/plus.login'
	]
}));

router.get('/google/callback', passport.authenticate('google', {
	successRedirect: '/auth/google/success',
	failureRedirect: '/auth/google/failure',
	session: false
}));

module.exports = router;
