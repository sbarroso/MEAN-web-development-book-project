module.exports = {
	//Development configuration options
	db: "mongodb://localhost/mean-book",
	sessionSecret: "developmentSessionSecret",
	facebook: {
		clientId: '',
		clientSecret: '',
		callbackURL: 'http://localhost:3000/oauth/facebook/callback'
	}
}