const express = require('express');
const router = express.Router();


const userController = require('../controllers/userController')



router.post('/register', userController.creatCompanydetails)

 router.get('/getAlldetails', userController.getAlldetails)
 router.get('/getbyCompanyname', userController.getbyCompanyname)
 



module.exports = router
