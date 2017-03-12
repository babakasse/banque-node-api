const mongoose = require('mongoose');

// User Schema
const userSchema = mongoose.Schema({
	nom:{
		type: String,
		required: true
	},
	prenom:{
		type: String,
		required: true
	},
	type:{
		type: String
	},
	email:{
		type: String,
        required:true
	},
	age:{
		type: String
	},
    sexe:{
		type: String
	},
	identifiant:{
		type: String,
        required:true
	},
	motdepasse:{
		type: String,
		required:true
	},
	image_url:{
		type: String
	},
	compte_courant:{
		type: String
	},
	livret_a:{
		type: String
	},
	create_date:{
		type: Date,
		default: Date.now
	}
});

const User = module.exports = mongoose.model('User', userSchema);

// Get Users
module.exports.getUsers = (callback, limit) => {
	User.find(callback).limit(limit);
}

// Get User
module.exports.getUserById = (id, callback) => {
	User.findById(id, callback);
}

// Add User
module.exports.addUser = (user, callback) => {
	User.create(user, callback);
}

// Update User
module.exports.updateUser = (id, user, options, callback) => {
	var query = {_id: id};
	var update = {
		nom: user.nom,
		prenom: user.prenom,
		type:user.type,
		age: user.age,
		sexe: user.sexe,
		email: user.email,
		identifiant: user.identifiant,
        motdepasse:user.motdepasse,
		image_url: user.image_url,
		compte_courant: user.compte_courant,
		livret_a : user.livret_a
	}
	User.findOneAndUpdate(query, update, options, callback);
}

// Delete User
module.exports.removeUser = (id, callback) => {
	var query = {_id: id};
	User.remove(query, callback);
}



module.exports.getUserByUsername = function(username, callback){
	var query = {username: username};
	User.findOne(query, callback);
}


module.exports.comparePassword = function(candidatePassword, hash, callback){
	bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
    	if(err) throw err;
    	callback(null, isMatch);
	});
}