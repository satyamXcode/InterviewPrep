const { Router } = require('express');

const adminRouter = Router();

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

adminRouter.put('/create', (req, res) => {
    res.json({
        message: "Create Course"
    })
})


adminRouter.get('/courses', (req, res) => {
    res.json({
        message: "Your created courses"
    })
})

module.exports = {
    adminRouter: adminRouter
}
