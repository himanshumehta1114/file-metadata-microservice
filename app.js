const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const multer = require("multer");
const body_parser = require("body-parser");

app.use(body_parser.json());

app.set("view engine", "ejs");

app.get('/', (req,res) => {
    res.render('index');
});

app.post('/size', multer({dest : './uploads/'}).single('photo'), function(req,res){
    var size = req.file.size;
    res.send({
        size : size
});

});

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});
