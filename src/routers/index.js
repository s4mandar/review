import userRouter from "../routers/users.js"
import { Router } from "express"

let main = Router()

main.use("/api/v1", userRouter)

export default main