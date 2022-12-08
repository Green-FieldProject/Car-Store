var carRouter = require('express').Router();
var carController = require('./carController');
const authMiddelware = require("../middleware/middleware")

// TODO: Create route handlers for each of the six methods in carController

carRouter.get("/",carController.getAll)
// carRouter.get("/filter",carController.filter)
//TODO: ADD GET USER POSTS
carRouter.post("/",authMiddelware,carController.createOne)
carRouter.delete('/:id',authMiddelware,carController.deleteOne)
carRouter.put('/:id',authMiddelware,carController.updateOne) 

//TODO: REJECT WHEN USER ASKS TO DELETE A POST THAT DOESN'T BELONG TO HIM


module.exports = carRouter;

