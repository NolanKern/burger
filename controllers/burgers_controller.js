var express = require("express");

var router = express.Router();

// import model for database usage
var burger = require("../models/burger.js");

// Router logic to control the flow of user interaction
router.get("/", function(req,res){
    burger.selectAll(function(data){
        var hbsObj = {
            burger:data
        };
        console.log(hbsObj);
        res.render("index",hbsObj);
    });
});

router.post("/", function(req,res){
    burger.insertOne([
        "burger_name", "devoured"
    ],
    [
        req.body.burger_name , req.body.devoured
    ], function(data){
        res.redirect("/");
    });
});


router.put("/:id", function(req,res){
    var condition = "id = " + req.params.id;
    console.log("condition: "+ condition);

    burger.updateOne({
        "devoured": req.body.devoured},
        condition, function(){
            res.redirect("/");
        });
});

router.delete('/:id', function (req, res) {
	var condition = 'id = ' + req.params.id;

	console.log('condition', condition);

	burger.updateOne({ devoured: req.body.devoured }, condition, function () {
		res.redirect('/');
	});
});

module.exports = router;