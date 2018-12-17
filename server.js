var express = require("express");
var port = process.env.PORT || 8080; 
var app = express();

const burgersController = require("./controllers/burgers_controller")
app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.post("/api/burgers",(req, res, next) => {
    return burgersController.createBurger(req.body)
        .then((createdBurger)=>res.status(200).json({burger:createdBurger}))
        .catch(next)
})

app.use((err,req,res,next)=>{
    console.log(err)
    return res.status(500).send("internal server error");
})
app.use(express.json());
app.use(express.static(path.join(__dirname, "./public")))

require("./routing/apiRoutes")(app);


app.listen(port,function(){
    console.log("app listening on http://localhost:" + port);
})

