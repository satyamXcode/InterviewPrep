const { Router } = require('express');

const courseRouter = Router();

courseRouter.post('/purchase', (req, res) => {
    res.json({
        message: "Purchase this course"
    })
})

courseRouter.get('/preview', (req, res) => {
    res.json({
        message: "All Courses"
    })
})

module.exports = {
    courseRouter: courseRouter
}