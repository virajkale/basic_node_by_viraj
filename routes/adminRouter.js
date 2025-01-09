const express= require("express");

const adminRouter = express.Router();

const { registerAdmin,getAdminDetail } = require("../controller/adminCtrl.js");

adminRouter.post('/register',registerAdmin);
adminRouter.get('/getadmin',getAdminDetail);

module.exports=adminRouter;