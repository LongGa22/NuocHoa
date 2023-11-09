const Routes = require("express").Router();

const { authMiddleware } = require("../middleware/authMiddleware");
const { userController } = require("../controller/userController");

Routes.get("/get_user", authMiddleware.verifyToken, userController.getAllUser);
Routes.get("/get_user/:id", userController.getUserByID);
Routes.delete("/delete_user/:id", userController.deteleUser);
Routes.put("/update_user/:id", userController.updateUser);

module.exports = Routes;


// import express from "express";
// const userRoute = express.Router();
// import userController from '../controller/userController.js';


// userRoute.get('/user', userController.dangky)

// export default userRoute;