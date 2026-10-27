import express from "express"
import userController from "../controllers/users.js"

let router = express.Router()

router
    .post("/user", userController.CreateUser)

export default router