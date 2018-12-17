var connection = require("../config/connection");

const burgerModel = {
    getBurgers: () => {
        connection.query("SELECT * FROM burgers", function (err, res) {
            if (err) throw err;
            console.log("selectAll has been executed");
        });
    },
    createNewBurger: (burgerInput) => {
        return new Promise((resolve, reject) => {
            return connection.query("INSERT INTO burgers SET ?", burgerInput, function (err, res) {
                if (err) reject(err);
                console.log(res.affectedRows + "burger inserted!\n");
                resolve(res);
            });
        })
    }
}

module.exports = burgerModel;