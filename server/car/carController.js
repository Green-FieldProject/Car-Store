var car = require('./Car');
function getAll (req, res){
    car.find({}).then((data) => {
      res.send(data);
    });
  };
function createOne (req, res) {
    console.log(req.body, "done");
    car.insertMany({
      name: req.body.name,
      description: req.body.description,
      imageUrl: req.body.imageUrl,
      price:req.body.price
    }).then((data) => {
      res.send(data);
    });
};


function updateOne (req, res) {
    console.log(req.params);
    let id = req.params.id;
    console.log(id);
    car.findOneAndUpdate(id,{
    price:req.body.price
    })
      .then(() => {
        res.send("updated");
      })
      .catch((err) => {
        res.send(err);
      });
};

function deleteOne (req, res) {
    console.log(req.params);
    let id = req.params.id;
    console.log(id);
    car.findByIdAndDelete(id)
      .then(() => {
        res.send("deleted");
      })
      .catch((err) => {
        res.send(err);
      });
};
function filter(req,res){
    try{
        const { body:{name,price} } = req
        if(!name && !price){
res.status(300).send("please corect")
        }
        car.find({$or:[{name},{price}]}, function(err, result) 
 {
    if (err)
    {
        res.send(err);
    }
    console.log(result);
    res.json(result);

 });

    }
    catch(err){
res.status(500).send("you have err",err)
    }
}
module.exports={deleteOne,updateOne,createOne,getAll,filter}
