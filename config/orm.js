//import the connection to mysql database
var connection = require("./connection");

var burgerModel=require("../models/burger")

//      * `selectAll()`
//      * `insertOne()`
//      * `updateOne()`

var burgerController = {

  selectAll: function () {
    burgerModel.getBurgers();
  },

  createBurger: () => {
    console.log(connection);
    connection.query(
      "INSERT INTO burgers SET ?", {
        burger_name: "Classic",
      },
      function (err, res) {
        console.log(res.affectedRows + "burger inserted!\n");
      }
    );
  },
  updateBurger: ()  => {
    //console.log("Updating all burger quantities...\n");
    connection.query(
      "UPDATE burgers SET ? WHERE ?",
      [{
          devoured: 1
        },
        {
          burger_name: "Classic"
        }
      ],
      function (err, res) {
        console.log(res.affectedRows + " burgers updated!\n");
      }
    );
  }
}

module.exports = burgerController;