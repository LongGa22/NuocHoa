const express = require('express');
const homeController = require('../controller/homeController');

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homeController.getHomePage);
    router.get('/registerpage',homeController.getRegisterPage);
    router.get('/loginpage',homeController.getLoginPage);
    router.get('/prod_details', homeController.getProd_details);

    return app.use("/", router);
}

module.exports = initWebRoutes;