const express = require('express');
const createError = require('../utils/error');
const router =express.Router();
const Hotal = require('../models/Hotel');
const {createHotel,updateHotel,deleteHotel,getHotel,getHotels} = require('../controllers/hotel');


//create
router.post('/', createHotel)

//update
router.put('/:id', updateHotel)
//delete
router.delete('/:id', deleteHotel)
//get
router.get('/:id', getHotel)
//get all 
router.get('/', getHotels)

module.exports = router;