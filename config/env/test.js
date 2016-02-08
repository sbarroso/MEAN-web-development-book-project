module.exports = {
	//Test configuration options
	db: 'mongodb://localhost/mean-book-test',
	sessionSecret: "developmentSessionSecret",
	facebook: {
		clientID: 'FILL_ME',
		clientSecret: 'FILL_ME',
		callbackURL: 'http://localhost:3000/oauth/facebook/callback'
	},
	twitter: {
		clientID: 'FILL_ME',
		clientSecret: 'FILL_ME',
		callbackURL: 'http://localhost:3000/oauth/twitter/callback'
	},
	google: {
		clientID: 'FILL_ME',
		clientSecret: 'FILL_ME',
		callbackURL: 'http://localhost:3000/oauth/google/callback'
	}
};