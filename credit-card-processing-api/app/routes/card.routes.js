module.exports = app => {
  const cards = require("../controllers/card.controller.js");

  var router = require("express").Router();

  // Create a new Card
  router.post("/addNewCard", cards.createCardDetails);

  // Retrieve all Cards
  router.get("/getAllCards", cards.getAllCards);

  app.use('/api/cards', router);
};
