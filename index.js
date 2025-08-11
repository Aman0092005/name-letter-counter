import express from "express";
import bodyParser from "body-parser";


const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));

var data = {};
app.get("/", (req,res) => {
    res.render("index.ejs",data);
});


app.post("/submit", (req,res) => {
    data = {count: req.body.fName.length + req.body.lName.length};
    res.redirect("/");
});


app.listen(port, () => {
    console.log(`Listening at Port ${port}`);
});
