const express = require("express"); 
const app = express(); 

app.use(express.json()); 


app.get("/git_app", (req, res)=> {
    res.send("Welcome to da APP"); 
});

app.listen(8060); 

console.log("Hej hej 8-)"); 

console.log("Text från Isabelle");

console.log("Tjenare från Gittan");

