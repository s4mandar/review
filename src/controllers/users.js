import userService from "../services/users.js"

class UserController {
    constructor() {}

    async CreateUser(req, res, next) {
        let resData = await userService.createUser(req, res)
        return res.status(resData.status).json(resData)
    }

    async getUsers(req, res, next) {
        let resData = await userService.getUsers(req, res)
        return res.status(resData.status).json(resData)
    }
}

let userController = new UserController

export default userController