import User from "../models/user.model.js"

class ProtectedController {
    async protected(req, res, next) {
        try {
            const user = req.user
            const userData = await User.findByPk(user.userId)

            res.status(200).json({
                ok: true,
                data: userData
            })
        } catch (error) {
            next(error)
        }
    }
}

export default new ProtectedController()