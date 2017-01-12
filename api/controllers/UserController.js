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
	 * @apiParam (body) {string} email 用户名
	 * @apiParam (body) {string} password 用户密码
	 * @apiUse CODE_200
	 * @apiUse CODE_500
	 */
	create: (req, res) =>{

	},

	update: (req, res) =>{

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
