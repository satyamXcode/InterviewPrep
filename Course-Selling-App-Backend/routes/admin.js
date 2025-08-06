const { Router } = require('express');
const adminRouter = Router();
const { adminModel } = require("../db");

adminRouter.post('/signup', (req, res) => {
    res.json({
        message: "signup endpoint"
    })
})

adminRouter.post('/signin', (req, res) => {
    res.json({
        message: "signin endpoint"
    })
})

adminRouter.post('/course', (req, res) => {
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
