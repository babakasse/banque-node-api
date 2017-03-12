const mongoose = require('mongoose');

// compte Schema
const compteSchema = mongoose.Schema({
	numero:{
		type: String,
		required: true
	},
	type:{
		type: String,
		required: true
	},
	solde:{
		type: Number,
		required: true
	},
	plafond:{
		type: Number,
		required: true
	},
	proprietaire:{
		type: String,
		required: true
	},
	create_date:{
		type: Date,
		default: Date.now
	},
});

const Compte = module.exports = mongoose.model('compte', compteSchema);

// Get comptes
module.exports.getComptes = (callback, limit) => {
	Compte.find(callback).limit(limit);
}

// Get compte
module.exports.getCompteById = (id, callback) => {
	Compte.findById(id, callback);
}

// Add compte
module.exports.addCompte = (compte, callback) => {
	Compte.create(compte, callback);
}

// Update compte
module.exports.updateCompte= (id, compte, options, callback) => {
	var query = {_id: id};
	var update = {
		name: compte.name,
		type: compte.type,
		solde:compte.solde,
		plafond:compte.plafond,
		proprietaire:compte.proprietaire
	}
	Compte.findOneAndUpdate(query, update, options, callback);
}

// Update compte
/*module.exports.virementsCompte= (id1, id2, compte1, compte2, options, callback) => {
	var query = {_id: id1};
	var query2 = {_id: id2}
	var update = {
		name: compte.name,
		type: compte.type,
		solde:compte.solde,
		plafond:compte.plafond,
		proprietaire:compte.proprietaire
	}
	Compte.findOneAndUpdate(query1, update1, options, callback);
}*/


// Delete compte
module.exports.removeCompte = (id, callback) => {
	var query = {_id: id};
	Compte.remove(query, callback);
}
