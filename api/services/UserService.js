/**
 * Created by WittBulter on 2017/1/12.
 */
const bcrypt = require('bcrypt')

module.exports = {
	findUserForName: (username, done) =>{
		User
			.find({username: username})
			.exec((err, userArray) =>{
				if (err) return cb(err)
				cb(null, userArray)
			})
	},

	createUser: (user, done) =>{
		User
			.create(user)
			.exec((err, created) =>{
				if (err) return cb(err)
				cb(null, created)
			})
	},

	compareUser: (newPassword, oldPassword, done) =>{
		bcrypt.compare(newPassword, oldPassword, (err, res) =>{
			if (err) return done(err)
			if (!res) return done(null, false)
			done(null, true)
		})
	},

}