const express = require('express');
const app = express();
require('dotenv').config();
const connectDB = require('./config/mongoDB');
const indexRoutes = require('./routes/index.routes');
const userRoutes = require('./routes/user.routes');
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', indexRoutes);
app.use('/user', userRoutes);







app.listen(process.env.PORT, () => {
    console.log('app is running at port: ', process.env.PORT);
})