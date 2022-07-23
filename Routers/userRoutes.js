const express = require("express");
const router = express.Router();

const userCtrl = require('../Controllers/userController');

router.post('/get-details', userCtrl.allDetails);


module.exports = router;
