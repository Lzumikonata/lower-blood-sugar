/**
 * Created by WittBulter on 2017/1/12.
 */
const bcrypt = require('bcrypt')
const DEFAULT_TYPE = ['developer', 'admin', 'member']

module.exports = {
	attributes: {
		username: {
			type: 'string',
			required: true
		},
		password: {
			type: 'string',
			required: true
		},
		/**
		 *   用户类型
		 *   开发者-developer  管理员-admin
		 *   用户-member
		 * */
		userType: {
			type: 'string',
			enum: ['developer', 'admin', 'member'],
			required: true
		},
		email: {
			type: 'email'
		},
		phone: {
			type: 'string',
			required: true
		},
		status: {
			type: 'string',
			enum: ['Unverified', 'Verified']
		}
	},
	beforeCreate: (values, cb) =>{
		bcrypt.genSalt(10, (err, salt) =>{
			bcrypt.hash(values.password, salt, (err, hash) =>{
				if (err) return cb(err)
				values.password = hash
				cb()
			})
		})
	},
	beforeUpdate: (values, cb) =>{
		if (!values.password) return cb()
		bcrypt.genSalt(10, (err, salt) =>{
			bcrypt.hash(values.password, salt, (err, hash) =>{
				if (err) return cb(err)
				values.password = hash
				cb()
			})
		})
	},
	getDefault: () =>{
		return DEFAULT_TYPE
	}
}