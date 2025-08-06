const { Router } = require("express");
const { userModel } = require("../db");
const jwt = require("jsonwebtoken");
const { JWT_USER_PASSWORD }  = require("../config");


const userRouter = Router();

userRouter.post('/signup', async (req, res) => {
    const { email, password, firstName, lastName } = req.body; // Add zod validation
    // Hash the password so plaintext pwd is not stored in the db

    await userModel.create({
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName
    })

    res.json({
        message: "signup endpoint"
    })
})

userRouter.post('/signin', async (req, res) => {

    const { email, password } = req.body;

    const user = await userModel.findOne({
        email: email,
        password: password
    })

    if (user) {
        const token = jwt.sign({
            id: user._id
        }, JWT_USER_PASSWORD);

        res.json({
            token: token
        })
    } else {

        res.status(403).json({
            message: "Incorrect credentails"
        })
    }
})

userRouter.get('/purchases', (req, res) => {
    res.json({
        message: "Your purchases"
    })
})


module.exports = {
    userRouter: userRouter
}