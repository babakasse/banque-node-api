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
	numero_compte:{
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
		age: user.age,
		sexe: user.sexe,
		email: user.email,
		identifiant: user.identifiant,
        motdepasse:user.motdepasse,
		image_url: user.image_url,
		numero_compte: user.numero_compte
	}
	User.findOneAndUpdate(query, update, options, callback);
}

// Delete User
module.exports.removeUser = (id, callback) => {
	var query = {_id: id};
	User.remove(query, callback);
}

//Enregister un utilisateur
module.exports.RegisterUser = function(newUser, callback){
	bcrypt.genSalt(10, function(err, salt) {
	    bcrypt.hash(newUser.password, salt, function(err, hash) {
	        newUser.password = hash;
	        newUser.save(callback);
	    });
	});
}
