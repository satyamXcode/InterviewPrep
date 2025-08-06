require('dotenv').config()
const express = require('express');
const { courseRouter } = require('./routes/course');
const { userRouter } = require('./routes/user');
const { adminRouter } = require('./routes/admin');
const mongoose = require('mongoose');

const app = express();

app.use(express.json()); // when user want to send json data from client to server

app.use('/api/v1/user', userRouter);
app.use('/api/v1/course', courseRouter);
app.use('/api/v1/admin', adminRouter);

async function main(){
    await mongoose.connect(process.env.MONGO_URL);
    app.listen(3000);
    console.log("Listening on port 3000");
}

main();