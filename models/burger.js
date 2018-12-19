var connection = require("../config/connection");

const burgerModel = {
    getBurgers: (cb) => {
        return connection.query("SELECT * FROM burgers", function (err, res) {
            if (err) {
                cb(err,{})
            }
            return cb(null,res)
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