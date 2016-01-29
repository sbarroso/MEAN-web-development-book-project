var moongose = require('moongose'),
	Schema = moongose.Schema;

var ArticleSchema = new Schema({
	created: {
		type:  Date,
		default: Date.now		
	},
	title: {
		type: String,
		default: '',
		trim: true,
		required: "Title cannot be blank"
	},
	content: {
		type: String,
		default: '',
		trim: true
	},
	creator: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});

moongose.model("Article", ArticleSchema);