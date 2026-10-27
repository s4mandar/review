import usersSchema from "../utils/validation.js"

export default {
    validateUser : (req, res, next) => {
        let { error } = usersSchema.validate(req.body)

        if(error) {
            return res.status(400).json({
                status: 400,
                message: error.message
            })
        }
        next()
    }
}