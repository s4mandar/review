import express from "express"
import { configDotenv } from "dotenv"
import mainRouter from "./routers/index.js"
configDotenv()

let app = express()
app.use(express.json())
app.use(mainRouter)

app.listen(process.env.PORT, console.log(`Backend server is running on ${process.env.PORT}`))