const mongoose = require('../db/connection');

const UserSchema = new mongoose.Schema({
	userName: {
		type: String
	},
	email: {
		type: String
	},
	password: {
		type: String
	},
	id: { type: String}
});


const User = mongoose.model('User', UserSchema);


module.exports = User;