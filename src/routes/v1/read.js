const express = require('express');
const { readTwittests } = require('../../api/apiTwitter');
const router = express.Router();

router.post("/v1/read/:a/:b", async function (req, res) {
    readTwittests()
        .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });

});

module.exports = router;
