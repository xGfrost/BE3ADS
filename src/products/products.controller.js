const express = require('express');
const { create, update, deleteproduct, getall, getallbyid } = require("./products.service");
const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const productdata = req.body;
        const product = await create(productdata);
        res.send(product);
    } catch (error) {
        res.status(400).send(error.message);
    }
})

router.post('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const productdata = req.body;
        const product = await update(id,productdata);
        res.send(product);
    } catch (error) {
        res.status(400).send(error.message);
    }
})

router.post('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        await deleteproduct(id);
        res.send({
            message: "Success"
        });
    } catch (error) {
        res.status(400).send(error.message);
    }
})

router.get('/', async (req,res) => {
    try {
        const name = req.query;
        let product;
        if (name) {
            product = await getall(name);
        } else {
            product = await getall();
        }
        res.send(product);
    } catch (error) {
        res.status(400).send(error.message);
    }
})

router.get('/:id',async (req,res) => {
    try {
        const id = req.params.id;
        const product = await getallbyid(id);
        res.send(product);
    } catch (error) {
        res.status(400).send(error.message);
    }
})

module.exports = router;