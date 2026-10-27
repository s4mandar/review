import pool from "../config/db.js"
import argon2 from "argon2"

class UserService {
    async createUser(req, res, next) {
        let { username, age, password } = req.body
        let existUser = await pool.query(`select * from users where username = $1`, [username])
        if(existUser.rows.length) {
            return {
                status: 409,
                message: "Username already exists!"
            }
        }
        let hashedPassword = await argon2.hash(password)
        pool.query(`insert into users(username, age, password) values($1, $2, $3)`, [username, age, hashedPassword])
        return {
            status: 201,
            message: "User created successfully!"
        }
    }

    async getUsers(req, res, next) {
        let resData = await pool.query(`select id, username, age from users`)

        return {
            status: 200,
            data: resData.rows
        }
    }
}

let userService = new UserService

export default userService