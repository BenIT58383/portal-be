module.exports = app => {
  const users = require("../controllers/tutorial.controller.js");

  var router = require("express").Router();

  // Create a new User
  router.post("/", users.create);

  // Retrieve all Users
  router.get("/", users.findAll);

  // Retrieve a single User with id
  router.get("/:id", users.findOne);


  app.use('/api/user', router);
};
