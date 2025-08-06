const { Router } = require('express');
const adminRouter = Router();
const { adminModel } = require("../db");
const jwt = require("jsonwebtoken");
const { JWT_Admin_PASSWORD }  = require("../config");
const { adminMiddleware } = require('../middleware/admin');


adminRouter.post('/signup', async (req, res) => {
     const { email, password, firstName, lastName } = req.body; // Add zod validation
    // Hash the password so plaintext pwd is not stored in the db

    await adminModel.create({
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName
    })

    res.json({
        message: "signup endpoint"
    })
})

adminRouter.post('/signin', async (req, res) => {
      const { email, password } = req.body;

    const admin = await adminModel.findOne({
        email: email,
        password: password
    })

    if (admin) {
        const token = jwt.sign({
            id: admin._id
        }, JWT_ADMIN_PASSWORD);

        res.json({
            token: token
        })
    } else {

        res.status(403).json({
            message: "Incorrect credentails"
        })
    }
})

adminRouter.post('/course', adminMiddleware, async (req, res) => {
    const adminId = req.userId;
    const { title, description, imageUrl, price } = req.body;

    // creating a web3 saas in 6 hours
    const course = await courseModel.create({
        title: title,
        description: description,
        imageUrl: imageUrl,
        price: price,
        creatorId: adminId
    })

    res.json({
        message: "Course"
    })
})


adminRouter.put('/create', (req, res) => {
    res.json({
        message: "Create Course"
    })
})


adminRouter.get('/courses/bulk', (req, res) => {
    res.json({
        message: "Your created courses"
    })
})

module.exports = {
    adminRouter: adminRouter
}
