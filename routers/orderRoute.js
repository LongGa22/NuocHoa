const { orderController } = require('../controller/orderController');
const route = require('express').Router();

route.post('/createorder', orderController.createOrder);
route.get('/getallorder', orderController.getallOrder);
route.get('/getallorder/:id', orderController.getbyidorder);
route.put('/modifyorder/:id', orderController.updateOrder);

module.exports = route;