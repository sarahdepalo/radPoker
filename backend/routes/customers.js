"use strict";

const express = require("express");
const router = express.Router();
const data = require('../data/customers.json')

router.get("/",  (req, res) => {
    try {
        res.json({
            customers: data
        }).status(200);
    } catch(error) {
        console.error("ERROR: ",error);
        return error;
    }
})

router.get("/:id", async (req, res) => {
    const { id } = req.params;
    console.log('ID NUMBER', id);
    try {
        const response = await data.find( customer => customer.id === parseInt(id));
        console.log(response)
        res.json(response).status(200);

    } catch(error) {
        console.error("ERROR: ",error);
        return error;
    }
})

module.exports = router;