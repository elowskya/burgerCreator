//import the connection to mysql database
var connection = require("./connection");

//      * `selectAll()`
//      * `insertOne()`
//      * `updateOne()`

function selectAll() {
    connection.query("SELECT * FROM burgers", function(err, res) {
      if (err) throw err;
      console.log("selectAll has been executed");
          });
  }

  function createBurger() {
       console.log(connection);
    connection.query(
      "INSERT INTO burgers SET ?",
      {
        burger_name: "Classic",
      },
      function(err, res) {
        console.log(res.affectedRows + "burger inserted!\n");
             }
    );
    }
    function updateBurger() {
      //console.log("Updating all burger quantities...\n");
      connection.query(
        "UPDATE burgers SET ? WHERE ?",
        [
          {
            devoured: 1
          },
          {
           burger_name: "Classic"
          }
        ],
        function(err, res) {
          console.log(res.affectedRows + " burgers updated!\n");
                 }
      );
            }
    updateBurger();