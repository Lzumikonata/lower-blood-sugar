/**
 *
 * @param req
 * @param res
 * @param next
 * @description :: 用户创建权限验证 检查数据库中是否已经有用户
 */
module.exports = function (req, res, next){
	const {username} = req.allParams()
	if (!username) return res.badRequest({message: '需要合适的用户名'})
	UserService.findUserForName(username, (err, users) =>{
		if (users.length > 0) return res.forbidden({message: '该帐号已被注册'})
		return next()
	})
}