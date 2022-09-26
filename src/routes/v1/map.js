const express = require('express');
const router = express.Router();
const helperException = require('./../../helpers/helperException')


router.get("/v1/map/", (req, res) => {
    try {
        const database = "null"
        if (database) {
            rs.send({
                tehran: 100,
            })
        }
        else {
            return helperException.exceptionHandler(req, res, 101, new Error("Database not found!"));
        }
    }
    catch (ex) { helperException.exceptionHandler(req, res, 102, ex); }
});

module.exports = router;
