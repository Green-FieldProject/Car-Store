var carRouter = require('express').Router();
var carController = require('./carController');

// TODO: Create route handlers for each of the six methods in carController

carRouter.get("/",carController.getAll)
carRouter.post("/",carController.createOne)
carRouter.get("/filter",carController.filter)
carRouter.delete('/:number',carController.deleteOne)
carRouter.put('/:number',carController.updateOne) 
module.exports = carRouter;

