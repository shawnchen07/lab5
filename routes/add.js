var data = require("../data.json");

exports.addFriend = function(req, res) {    
	// Your code goes here
	res.render('add');
	// console.log("Adding friend.....");
	//console.log(data);
	var qname = req.query.name;
	var qdescription = req.query.description;
	var randomInt = Math.floor(Math.random()*10) + 1;
	// console.log("randomInt: "+randomInt);

	var fakeImage = "http://lorempixel.com/400/400/people/"+randomInt;
	// console.log("qname: "+qname);
	// console.log("qdescription: "+qdescription);
	// console.log("fakeImage: "+fakeImage);

	var newFriend = {
		'name': qname,
		'description': qdescription,
		'imageURL': fakeImage
	}
	// console.log(newFriend);
	data["friends"].push(newFriend);
 }