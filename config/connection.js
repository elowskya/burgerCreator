//connect node to mysql

var mysql = require("mysql");

var connection = mysql.createConnection((() => {
  const localConnection = {
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    password: "root",
    database: "burgers_db"
  };

  if (process.env.JAWSDB_URL) {
    return process.env.JAWSDB_URL;
  } else {
    return localConnection
  }
})());

// connection.connect(function (err) {
//   if (err) {
//     return console.error("error connecting: " + err);
//   } else {
//     console.log("connected as id " + connection.threadId);
//   };

// });

connection.connect(function (err) {
  // console.log("ERR0R",err)
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;