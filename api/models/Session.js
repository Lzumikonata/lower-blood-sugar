/**
 * Created by WittBulter on 2017/1/12.
 * @description :: 会话模型
 */


module.exports = {
	attributes: {
		username: {
			type: 'email',
			required: true
		},
		clientToken: {
			type: 'string',
		},
		userID: {
			type: 'string'
		},
	}
}