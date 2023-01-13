const CardModal = require("../models/card.model.js");

// Create and Save a new cards
exports.createCardDetails = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  
  isValidCard = validateCardNumber(req.body.cardNumber);

  if(isValidCard){
      // Create a card
  const card = new CardModal({
    UserName: req.body.userName,
    CardNumber: req.body.cardNumber,
    CardLimit: req.body.cardLimit,
    Balance: req.body.balance,  
  });
  // Save card in the database
  CardModal.createCardDetails(card, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    else res.send(data);
  });
  }

  else{
    res.status(200).send({
      message:
         "Card Number is not valid"
    })
  }
  
  
};

// Retrieve all cards from the database.
exports.getAllCards = (req, res) => {
  const title = req.query.title;

  CardModal.getAllCards(title, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving cards."
      });
    else res.send(data);
  });
};

const validateCardNumber = number => {
  const regex = new RegExp("^[0-9]{13,19}$");
  if (!regex.test(number)){
      return false;
  }

  return luhnCheck(number);
}

const luhnCheck = val => {
  let checksum = 0; 
  let j = 1; 

  for (let i = val.length - 1; i >= 0; i--) {
    let calc = 0;
    calc = Number(val.charAt(i)) * j;

    if (calc > 9) {
      checksum = checksum + 1;
      calc = calc - 10;
    }
    checksum = checksum + calc;
    if (j == 1) {
      j = 2;
    } else {
      j = 1;
    }
  }
  return (checksum % 10) == 0;
}


