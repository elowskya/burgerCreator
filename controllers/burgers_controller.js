//import the connection to mysql database
var burgerModel = require("../models/burger")

//      * `selectAll()`
//      * `insertOne()`
//      * `updateOne()`

var burgerController = {

    selectAll: function (cb) {
       return burgerModel.getBurgers(cb);
    },

    createBurger: (newBurger) => {
        return burgerModel.createNewBurger(newBurger)

    },
    // connection.query(
    //   "INSERT INTO burgers SET ?", {
    //     burger_name: "Classic",
    //   },
    //   function (err, res) {
    //     console.log(res.affectedRows + "burger inserted!\n");
    //   }
    // );

    updateBurger: () => {
        //console.log("Updating all burger quantities...\n");
        // connection.query(
        //   "UPDATE burgers SET ? WHERE ?",
        //   [{
        //       devoured: 1
        //     },
        //     {
        //       burger_name: "Classic"
        //     }
        //   ],
        //   function (err, res) {
        //     console.log(res.affectedRows + " burgers updated!\n");
        //   }
        // );
    }
}

module.exports = burgerController;