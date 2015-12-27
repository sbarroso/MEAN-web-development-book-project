var mongoose = require("mongoose"),
	Schema = mongoose.Schema;

var UserSchema = new Schema({
	firstName: String,
	lastName: String,
	email: {
		type: String,
		index: true,
		match: /.+\@.+\..+/
	},
	username: {
		type: String,
		trim: true,
		unique: true,
		required: true
	},
	password: {
		type: String,
		validate: [
			function(password) {
				return password.length >= 6;
			},
			"Password should be longer"
		]
	},
	created: {
		type: Date,
		default: Date.now
	},
	website: {
		type: String,
		get: function(url) {
			if (!url) {
				return url;
			} else {
				if (url.indexof("http://") !== 0 && url.indexof("https://") !== 0) {
					url = "http://" + url;
				}
				return url;
			}
		}
	},
	role: {
		type: String,
		enum: ["Admin", "Owner", "User"]
	}
});

UserSchema.virtual("fullName").get(function() {
	return this.firstName + " " + this.lastName;
}).set(function(fullName) {
	var splitName = fullName.split(" ");
	this.firstName = splitName[0] || "";
	this.lastName = splitName[1] || "";
});

UserSchema.statics.findOneByUsername = function(username, callback) {
	this.findOne({username: new RegExp(username, "i")}, callback);
}

UserSchema.methods.authenticate = function(password) {
	return this.password === password;
}

UserSchema.pre("save", function(next) {
	if (this.firstName) {
		next();
	} else {
		next(new Error("An Error Occurred"));
	}
});

UserSchema.post("save", function(next) {
	if (this.isNew) {
		console.log("A new user was created.");
	} else {
		console.log("A user was updated.");
	}
});

UserSchema.set("toJSON", {getters: true, virtuals: true});

mongoose.model("User", UserSchema);

var PostSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	content: {
		type: String,
		required: true
	},
	author: {
		type: Schema.ObjectId,
		ref: "User"
	}
});

mongoose.model("Post", PostSchema);