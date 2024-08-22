const express= require('express');
const dotenv = require('dotenv');

const app = express();

dotenv.config();

const PORT = process.env.PORT;

app.use(express.json());

const usersController = require("./users/users.controller");


app.use('/users', usersController)


app.listen(PORT, () => {
    console.log("express API running in port: "+ PORT);
})