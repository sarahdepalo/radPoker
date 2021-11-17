"use strict";

const express = require("express");
const router = express.Router();
const contests = require('../data/contests.json');
const accounts = require('../data/accounts.json');

router.get('/',  (req, res) => {
    try {
        const contestData = contests.map((contest) => {
            let o = Object.assign({}, contest)
            o.contestInfo = accounts.filter(account => account.contest_id === contest.id)
            return o;
        })

        res.json(contestData).status(200)

    } catch (error) {
        console.error("ERROR: ", error);
        return error;
    }
});

module.exports = router;