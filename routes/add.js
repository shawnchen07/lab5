var data = require("../data.json");

// exports.view = function(req, res){
// 	console.log(data);
// 	res.render('add');
// 	addFriend(req, res);
// }

exports.addFriend = function(req, res) {    
	// Your code goes here
	res.render('add');
	console.log("Adding friend.....");
	//console.log(data);
	var qname = req.query.name;
	var qdescription = req.query.description;
	var randomInt = Math.floor(Math.random()*10) + 1;
	console.log("randomInt: "+randomInt);

	var fakeImage = "http://lorempixel.com/400/400/people/"+randomInt;
	console.log("qname: "+qname);
	console.log("qdescription: "+qdescription);
	console.log("fakeImage: "+fakeImage);

	var newFriend = {
		'name': qname,
		'description': qdescription,
		'imageURL': fakeImage
	}
	console.log(newFriend);
	data["friends"].push(newFriend);
// 	res.render('index', {
// 		'friends': [
// 			{	'name': 'Doug Engelbart',
// 				'image': 'http://lorempixel.com/500/500/people/2',
// 				'description': 'Doug Engelbart is cool.'
// 			},
// 			{	'name': 'Ivan Sutherland',
// 				'image': 'http://lorempixel.com/500/500/people/3',
// 				'description': 'Ivan Sutherland rocks!'
// 			},
// 			{	'name': 'JCR Licklider',
// 				'image': 'http://lorempixel.com/500/500/people/4',
// 				'description': 'JCR Licklider rules.'
// 			},
// 			{	'name': 'Vannevar Bush',
// 				'image': 'http://lorempixel.com/500/500/people/5',
// 				'description': 'Vannevar Bush is great!'
// 			},
// 			{	'name': 'Alan C. Kay',
// 				'image': 'http://lorempixel.com/500/500/people/6',
// 				'description': 'Alan C. Kay rocks my socks.'
// 			},
// 			{	'name': 'Allen Newell',
// 				'image': 'http://lorempixel.com/500/500/people/7',
// 				'description': 'Allen Newell is awesome!'
// 			},
// 			{	'name': 'Lucy Suchman',
// 				'image': 'http://lorempixel.com/500/500/people/8',
// 				'description': 'Lucy Suchman is good.'
// 			},
// 			{	'name': 'Grace Hopper',
// 				'image': 'http://lorempixel.com/500/500/people/9',
// 				'description': 'Grace Hopper is a genius!!'
// 			}
// 		]
// 	});
 }