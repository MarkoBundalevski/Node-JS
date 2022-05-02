const express = require("express");
const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.set('view engine', 'ejs');

//app.get("/", (req, res, next) => {
    //console.log("Here");
    //res.render("index", {text: "World"});


    //res.status(500).send("Hi");
    //res.download('server.js');
   //res.send('Hi');
//});

const userRouter = require("./routes/users");

app.use("/users", userRouter);


app.listen(3000);
