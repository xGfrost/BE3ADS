const express = require('express');
const { create, update, deleteuser } = require("./users.service");
const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const userdata = req.body;
        const user = await create(userdata);
        res.send(user);
    } catch (error) {
        res.status(400).send(error.message);
    }
})

router.post('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const userdata = req.body;
        const user = await update(id,userdata);
        res.send(user);
    } catch (error) {
        res.status(400).send(error.message);
    }
})

router.post('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        await deleteuser(id);
        res.send({
            message: "Success"
        });
    } catch (error) {
        res.status(400).send(error.message);
    }
})

module.exports = router;