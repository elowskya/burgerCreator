const express = require("express");
const path = require("path");
const port = process.env.PORT || 8080; 
const app = express();

const burgersController = require("./controllers/burgers_controller")
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(express.static(path.join(__dirname, "./public")))

require("./routing/indexRoute")(app);

app.post("/api/burgers",(req, res, next) => {
    return burgersController.createBurger(req.body)
        .then((createdBurger)=>res.status(200).json({burger:createdBurger}))
        .catch(next)
})

app.use((err,req,res,next)=>{
    console.log(err)
    return res.status(500).send("internal server error");
})



app.listen(port,function(){
    console.log("app listening on http://localhost:" + port);
})

