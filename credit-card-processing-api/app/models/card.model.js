const sql = require("./db.js");

// constructor
const Card = function(card) {
    this.UserName = card.UserName,
    this.CardNumber = card.CardNumber,
    this.CardLimit = card.CardLimit,
    this.Balance = card.Balance  
};

Card.createCardDetails = (newCard, result) => {
  sql.query("INSERT INTO card_details SET ?", newCard, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created card: ", { id: res.insertId, ...newCard });
    result(null, { id: res.insertId, ...newCard });
  });
};

Card.getAllCards = (title, result) => {
  let query = "SELECT * FROM card_details";

  if (title) {
    query += ` WHERE title LIKE '%${title}%'`;
  }

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("card_details: ", res);
    result(null, res);
  });
};



module.exports = Card;
