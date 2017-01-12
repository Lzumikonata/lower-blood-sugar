/**
 * @description :: 接口登录认证逻辑
 */

module.exports = (req, res, next) =>{
	const clientToken = req.headers.authorization
	if (!clientToken) return res.forbidden({message: '未登录或token已过期'})

	SessionService.findSession(clientToken, (err, sessionData) =>{
		if (!sessionData) return res.forbidden({message: '未登录或token已过期'})
		/**
		 *
		 * @description 通过验证, 将信息保存在header中 后续验证不再查询email
		 */
		req.headers.userID = sessionData.userID
		req.headers.username = sessionData.username
		return next()
	})
}