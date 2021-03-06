/**
 * Created by WittBulter on 2017/1/12.
 */

module.exports = {
	/**
	 * @apiDefine CODE_500
	 * @apiSuccessExample {json} Response 500 Example
	 *   HTTP/1.1 500 Internal Server Error
	 *   {
     *     "message": "服务器错误"
     *   }
	 */
	/**
	 * @apiDefine CODE_400
	 * @apiSuccessExample {json} Response 400 Example
	 *   HTTP/1.1 400 Internal Server Error
	 *   {
     *     "message": "语法错误提示(如果有)"
     *   }
	 */
	/**
	 * @apiDefine CODE_403
	 * @apiSuccessExample {json} Response 400 Example
	 *   HTTP/1.1 403 Internal Server Error
	 *   {
     *     "message": "错误内容"
     *   }
	 */
	/** js
	 * @apiDefine CODE_200
	 * @apiSuccessExample {json} Response 200 Example
	 *   HTTP/1.1 200 OK
	 *   {
	 *     "code": 200
	 *   }
	 */
	/** js
	 * @apiDefine CODE_204
	 * @apiSuccessExample {json} Response 204 Example
	 *   HTTP/1.1 204 OK
	 */
	/** js
	 * @apiDefine PAGE
	 * @apiParam (param) {string} [page] 页码数
	 * @apiParam (param) {string} [per_page] 每页显示数量
	 */
	/**
	 *
	 * @api {ANY} http://admin.itsmycar.cn/session [Authorization]
	 * @apiGroup Authorization
	 * @apiDescription 接口权限验证
	 * @apiParam (header) {string} Authorization 用户验证token
	 */

	/**
	 *
	 * @api {GET} http://lower-blood-sugar/user [showSelf]
	 * @apiGroup User
	 * @apiDescription 获取当前登录用户信息
	 * @apiUse CODE_200
	 * @apiUse CODE_500
	 */

	show: (req, res) =>{

	},


	/**
	 *
	 * @api {POST} http://lower-blood-sugar/user [register]
	 * @apiGroup User
	 * @apiDescription 用户注册
	 * @apiParam (body) {string} username 用户名
	 * @apiParam (body) {string} password 用户密码
	 * @apiUse CODE_200
	 * @apiUse CODE_500
	 */
	create: (req, res) =>{
		const {username, password} = req.allParams()
		if (!username || !password) return res.badRequest({message: '需要合适的用户名或密码'})
		if (password.length < 6 || password.length > 22){
			return res.badRequest({message: '密码不符合规范'})
		}
		// 用户注册类型总是member
		UserService.createUser({
			username: username,
			password: password,
			status: 'Unverified',
			userType: 'member'
		}, (err, created) =>{
			if (err) return res.badRequest()
			delete created.password
			return res.ok(created)
		})
	},

	/**
	 *
	 * @api {PUT} http://lower-blood-sugar/user [updateSelf]
	 * @apiGroup User
	 * @apiDescription 用户更新信息
	 * @apiParam (body) {string} password 用户密码
	 * @apiUse CODE_200
	 * @apiUse CODE_500
	 */
	update: (req, res) =>{
		const {password} = req.allParams()
		if (password.length < 6 || password.length > 22){
			return res.badRequest({message: '密码不符合规范'})
		}




	},

	destroy: (req, res) =>{

	},

	showForAdmin: (req, res) =>{

	},

	createForAdmin: (req, res) =>{

	},

	updateForAdmin: (req, res) =>{

	}
}
