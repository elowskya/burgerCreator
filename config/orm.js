//import the connection to mysql database
var connection = require("./connection");

//      * `selectAll()`
//      * `insertOne()`
//      * `updateOne()`

function afterConnection() {
    connection.query("SELECT * FROM burgers", function(err, res) {
      if (err) throw err;
      console.log("i am reading this file");
      createBurger();
          });
  }

  function createBurger() {
    console.log("Inserting a new burger...\n");
    console.log(connection);
    connection.query(
      "INSERT INTO burgers SET ?",
      {
        burger_name: "Classic",
      },
      function(err, res) {
        console.log(res.affectedRows + "burger inserted!\n");
        // Call updateBurgers AFTER the INSERT completes
       // updateBurgers();
      }
    );
    }
  createBurger();