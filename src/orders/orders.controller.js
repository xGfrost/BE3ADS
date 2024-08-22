const express = require('express');
const { update, getallbyidcustomer } = require('./orders.service');
const router = express.Router();

router.post('/update/:id', async (req,res) => {
    try {
        const id = req.params.id;
        const orderdata = req.body;
        const order = await update(id, orderdata);
        res.send(order);
    } catch (error) {
        res.status(400).send(error.message);
    }
})

router.get('/:customer_id', async (req, res) => {
    try {
        const id = req.params.id;
        const order = await getallbyidcustomer(id);
        res.send(order);
    } catch (error) {
        res.status(400).send(erro.message);
    }
})

module.exports = router;