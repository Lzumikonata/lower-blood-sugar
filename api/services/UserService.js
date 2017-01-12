/**
 * Created by WittBulter on 2017/1/12.
 */

module.exports = {
	findUserForPhone: (phone, done) =>{
		User
			.find({phone: phone})
			.exec((err, userArray) =>{
				if (err) return cb(err)
				cb(null, userArray)
			})
	}

}