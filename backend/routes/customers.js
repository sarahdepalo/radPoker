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
    console.log('ID NUMBER', customer_id);
    try {
        const response = await data.find( customer => customer.id === customer_id);
        console.log(response)
        res.json(response).status(200);

    } catch(error) {
        console.error("ERROR: ",error);
        return error;
    }

})

module.exports = router;