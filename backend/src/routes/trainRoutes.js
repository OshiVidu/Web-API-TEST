const express = require('express');
const { getTrainLocation } = 
require('../controllers/trainController');
const router = express.Router();
router.get('/location', getTrainLocation);
module.exports = router;