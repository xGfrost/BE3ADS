const express = require('express');
const { getallbyorderid } = require('./order_items.service');
const router = express.Router();

router.get('/:order_id', async (req,res) => {
    try {
        const order_id = req.params.id
        const order_items = await getallbyorderid(order_id);
        res.send(order_items);
    } catch (error) {
        res.status(400).send(error.message)
    }
})

module.exports = router;