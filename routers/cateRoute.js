const Routes = require("express").Router();
const { cateController } = require('../controller/cateController.js');

Routes.post('/createcate', cateController.createCate);
Routes.get("/getallcate", cateController.readCate);
Routes.get("/getallcate/:id", cateController.readCateid);
Routes.put("/modifycate/:id", cateController.modiCate);
Routes.delete("/deletecate/:id", cateController.deleteCate);

module.exports = Routes;