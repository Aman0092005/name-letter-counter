import express from "express";
import bodyParser from "body-parser";


const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req,res) => {
    res.render("index.ejs");
});


app.post("/submit", (req,res) => {
    var data = {count: req.body.fName.length + req.body.lName.length};
    res.render("index.ejs",data;
    data ={};
});


app.listen(port, () => {
    console.log(`Listening at Port ${port}`);
});
