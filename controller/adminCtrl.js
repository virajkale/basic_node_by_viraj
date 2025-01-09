const AsyncHandler = require("express-async-handler");
// const bcrypt = require("bcryptjs");
const AdminModel = require("../model/Admin.js");

exports.registerAdmin = AsyncHandler(async (req, res) => {
  const { name, email } = req.body;

  const admin = await AdminModel.create({
    name,
    email,
  });

  res.status(200).json({
    status: true,
    message: "Created Successfully",
  });


});

exports.getAdminDetail = AsyncHandler(async (req, res) => {
   
  
   
    res.status(200).json({
      status: true,
      message: "Created Successfully",
    });
  
  
  });
