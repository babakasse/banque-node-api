const mongoose = require('mongoose');

// article Schema
const articleSchema = mongoose.Schema({
	title:{
		type: String,
		required: true
	},
	description:{
		type: String
	},
	author:{
		type: String,
		required: true
	},
	image_url:{
		type: String
	},
	create_date:{
		type: Date,
		default: Date.now
	}
});

const Article = module.exports = mongoose.model('Article', articleSchema);

// Get articles
module.exports.getArticles = (callback, limit) => {
	Article.find(callback).limit(limit);
}

// Get article
module.exports.getArticleById = (id, callback) => {
	Article.findById(id, callback);
}

// Add article
module.exports.addArticle = (article, callback) => {
	Article.create(article, callback);
}

// Update article
module.exports.updateArticle = (id, article, options, callback) => {
	var query = {_id: id};
	var update = {
		title: article.title,
		description: article.description,
		author: article.author,
		image_url: article.image_url
	}
	Article.findOneAndUpdate(query, update, options, callback);
}

// Delete article
module.exports.removeArticle = (id, callback) => {
	var query = {_id: id};
	Article.remove(query, callback);
}
