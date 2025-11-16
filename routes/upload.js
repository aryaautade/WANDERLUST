const express = require('express');
const router = express.Router();
const multer = require('multer');
const { storage } = require('./cloudconfig'); 
const upload = multer({ storage });

router.post('/upload', upload.single('image'), (req, res) => {
    res.json({ url: req.file.path });
});

module.exports = router;
