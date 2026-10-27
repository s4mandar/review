import express from "express"
import { configDotenv } from "dotenv"
configDotenv()

let app = express()

app.listen(process.env.PORT, console.log("Server is running..."))