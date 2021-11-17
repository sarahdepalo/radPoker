"use strict";

const express = require("express");
const router = express.Router();
const data = require('../data/customers.json');
const accounts = require('../data/accounts.json');

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
        const customerInfo = await data.find( customer => customer.id === parseInt(id));
        const accountData = await accounts.filter(account => account.customer_id === parseInt(id))
        res.json({
            customer: customerInfo,
            accounts: accountData
        }).status(200);

    } catch(error) {
        console.error("ERROR: ",error);
        return error;
    }
})

module.exports = router;