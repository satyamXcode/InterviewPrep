const express = require('express');
const { courseRouter } = require('./routes/course');
const { userRouter } = require('./routes/user');
const { adminRouter } = require('./routes/admin');
const mongoose = require('mongoose');

const app = express();

app.use('/api/v1/user', userRouter);
app.use('/api/v1/course', courseRouter);
app.use('/api/v1/admin', adminRouter);

async function main(){
    await mongoose.connect("url");
    app.listen(3000);
    console.log("Listening on port 3000");
}

main()