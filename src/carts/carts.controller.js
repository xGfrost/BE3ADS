const express = require('express');
const { create, update, deletecart, getall } = require("./carts.service");
const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const cartdata = req.body;
        const cart = await create(cartdata);
        res.send(cart);
    } catch (error) {
        res.status(400).send(error.message);
    }
})

router.post('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const cartdata = req.body;
        const cart = await update(id,cartdata);
        res.send(cart);
    } catch (error) {
        res.status(400).send(error.message);
    }
})

router.post('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        await deletecart(id);
        res.send({
            message: "Success"
        });
    } catch (error) {
        res.status(400).send(error.message);
    }
})

router.get('/', async (req,res) => {
    try {
        const cart = await getall();
        res.send(cart);
    } catch (error) {
        res.status(400).send(error.message);
    }
})

module.exports = router;