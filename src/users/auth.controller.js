const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const { PrismaClient } = require('@prisma/client');

dotenv.config();
const prisma = new PrismaClient();

const router = express.Router();

router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        
        const user = await prisma.users.findFirst({
            where: { username: username },
            
        });


        if (!user) {
            return res.status(401).json({ message: 'Email atau password salah.' });
        }

        
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({ message: 'Email atau password salah.' });
        }

        
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
            expiresIn: '1h', // Token akan kedaluwarsa dalam 1 jam
        });

        
        res.cookie('token', token, { httpOnly: true });
        res.json({ message: 'Login berhasil', token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Terjadi kesalahan server' });
    }
});

module.exports = router;
