var carRouter = require('express').Router();
var carController = require('./carController');
const authMiddelware = require("../middleware/middleware")



carRouter.get("/",carController.getAll)
// carRouter.get("/filter",carController.filter)

carRouter.post("/",authMiddelware,carController.createOne)
carRouter.delete('/:id',carController.deleteOne)
carRouter.put('/:id',carController.updateOne) 




module.exports = carRouter;

