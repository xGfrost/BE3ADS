const express= require('express');
const dotenv = require('dotenv');
// const cookieParser = require('cookie-parser');

const app = express();

dotenv.config();

const PORT = process.env.PORT;

app.use(express.json());
// app.use(cookieParser());

const usersController = require("./users/users.controller");
const productController = require("./products/products.controller");
const cartController = require("./carts/carts.controller");
const ordersController = require("./orders/orders.controller");
const order_itemsController = require("./order_items/order_items.controller");
const authCOntoller = require("./users/auth.controller");


app.use('/users', usersController);
app.use('/prodcuts', productController);
app.use('/carts', cartController);
app.use('/orders', ordersController);
app.use('/order_items', order_itemsController);
app.use('/auth', authCOntoller);

app.listen(PORT, () => {
    console.log("express API running in port: "+ PORT);
})