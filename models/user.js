var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userService = require('../services/user-service');

var userSchema = new Schema({
	firstName: {type:String, required: 'Please enter your first name'},
	lastName: {type:String, required: 'Please enter your last name'}, 
	username: {type:String, required: 'Please enter your username'}, 
	email: {type:String, required: 'Please enter your email'}, 
	password: {type:String, required: 'Please enter your password'}
});

userSchema.path('email').validate(function(value, next){
	userService.findUser(value, function(err, user){
		if (err){
			console.log(err);
			return next(false);
		}
		next(!user);
	});
}, 'That email is already in use!');

var User = mongoose.model('User', userSchema);

module.exports = {
	User: User
};