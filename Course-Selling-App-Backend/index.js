const express = require('express');
const { courseRouter } = require('./routes/course');
const { userRouter } = require('./routes/user');
const app = express();

app.use('/api/v1/user', userRouter);
app.use('/api/v1/course', courseRouter);


app.listen(3000, () => {
    console.log('Listening on port 3000')
});