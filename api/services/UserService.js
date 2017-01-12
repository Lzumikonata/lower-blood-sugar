/**
 * Created by WittBulter on 2017/1/12.
 */

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

}