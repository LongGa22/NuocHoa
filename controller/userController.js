const { model } = require("mongoose");
const User = require("../models/userModel");

exports.userController = {
  /*
   *GET ALL User
   */

  getAllUser: async (req, res) => {
    try {
      const data = await User.find();
      res.status(200).json({ success: true, data: data });
    } catch (error) {
      res.status(500).json(error);
    }
  },

  /*
   *Get User ID
   */
  getUserByID: async (req, res) => {
    try {
      const data = await User.findById(req.params.id);
      res.status(200).json({ success: true, data: data });
    } catch (error) {
      res.status(500).json(error);
    }
  },

  /*
   * Delete User
   */

  deteleUser: async (req, res) => {
    try {
      const data = await User.findByIdAndDelete(req.params.id);
      if (!data) {
        return res.status(404).json("User not found!");
      }
      res.status(200).json("User deleted successfully!");
    } catch (error) {
      res.status(500).json(error);
    }
  },

  /*
   * Update User
   */

  updateUser: async (req, res) => {
    try {
      const data = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      if (!data) {
        return res.status(404).json("User not found!");
      }

      res.status(200).json({ success: true, data: data });
    } catch (error) {
      res.status(500).json(error);
    }
  },
};







// import bcrypt from 'bcryptjs';
// import express from 'express';
// const router = express.Router();
// import User from '../models/userModel.js';

// router.post('/user', async (req,res)=>{
//     let customer = new User({
//         name: req.body.name,
//         email: req.body.email,
//         password: bcrypt.hashSync(req.body.password, 10),
//         phone: req.body.phone,
//         isAdmin: req.body.isAdmin,
//         street: req.body.street,
//         city: req.body.city,
//     })
//     customer = await customer.save();

//     if(!customer)
//         return res.status(400).send('the customer cannot be created!')
//     res.send(customer);
// })

// export default router;