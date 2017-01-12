/**
 * Created by WittBulter on 2017/1/12.
 * @description :: 会话控制器
 */

module.exports = {
	/**
	 *
	 * @api {POST} http://lower-blood-sugar/session  [login]
	 * @apiGroup Session
	 * @apiDescription 用户登录,获取用户session
	 * @apiParam (body) {string} username 用户名
	 * @apiParam (body) {string} password 用户密码
	 * @apiUse CODE_200
	 * @apiUse CODE_500
	 */
	login: (req, res) =>{
		const {username, password} = req.allParams()
		if (!username || !password) return res.badRequest({message: '需要用户名与密码'})
		SessionService.authUser({
			username: username,
			password: password
		}, req, (err, returnUser, message) =>{
			if (!returnUser){
				res.status(401)
			}
			return res.ok({
				message: message,
				user: returnUser
			})
		})
	},
}