module.exports = app => {
    const crud = require("../controllers/crud.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", (req,res) =>{
      crud.create(req,res)
   
    } );
  
    // Retrieve all crud
    router.get("/", crud.findAll);
  
    // Retrieve all published crud
    router.get("/published", crud.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", crud.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", crud.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", crud.delete);
  
    // Delete all crud
    router.delete("/", crud.deleteAll);
  
    app.use('/api/crud', router);
  };