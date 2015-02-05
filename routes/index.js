// Get all of our friend data
var data = require('../data.json');

exports.view = function(req, res){
	// console.log(data);
	res.render('index', data);
	// res.render('index', {
	// 	'friends': [
	// 		{	'name': 'Doug Engelbart',
	// 			'image': 'http://lorempixel.com/500/500/people/2',
	// 			'description': 'Doug Engelbart is cool.'
	// 		},
	// 		{	'name': 'Ivan Sutherland',
	// 			'image': 'http://lorempixel.com/500/500/people/3',
	// 			'description': 'Ivan Sutherland rocks!'
	// 		},
	// 		{	'name': 'JCR Licklider',
	// 			'image': 'http://lorempixel.com/500/500/people/4',
	// 			'description': 'JCR Licklider rules.'
	// 		},
	// 		{	'name': 'Vannevar Bush',
	// 			'image': 'http://lorempixel.com/500/500/people/5',
	// 			'description': 'Vannevar Bush is great!'
	// 		},
	// 		{	'name': 'Alan C. Kay',
	// 			'image': 'http://lorempixel.com/500/500/people/6',
	// 			'description': 'Alan C. Kay rocks my socks.'
	// 		},
	// 		{	'name': 'Allen Newell',
	// 			'image': 'http://lorempixel.com/500/500/people/7',
	// 			'description': 'Allen Newell is awesome!'
	// 		},
	// 		{	'name': 'Lucy Suchman',
	// 			'image': 'http://lorempixel.com/500/500/people/8',
	// 			'description': 'Lucy Suchman is good.'
	// 		},
	// 		{	'name': 'Grace Hopper',
	// 			'image': 'http://lorempixel.com/500/500/people/9',
	// 			'description': 'Grace Hopper is a genius!!'
	// 		}
	// 	]
	// });
};