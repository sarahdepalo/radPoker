'use strict';

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('RadPoker Admin API')
});

module.exports = router;