const express = require('express');
const createError = require('../utils/error');
const router =express.Router();
const User = require('../models/User');
const createUser = require('../controllers/user');
const updateUser = require('../controllers/user');
const deleteUser = require('../controllers/user');
const getUser = require('../controllers/user');
const getUsers = require('../controllers/user');

//create
router.post('/', createUser)   

//update
router.put('/:id', updateUser)
//delete
router.delete('/:id', deleteUser)
//get
router.get('/:id', getUser)
//get all 
router.get('/', getUsers)

module.exports = router;