const express = require('express')
const router = express.Router()

router.use(require('./health'));

// Version 1
router.use(require('./v1/map'));
router.use(require('./v1/read'));

// Version 2
// ...

module.exports = router