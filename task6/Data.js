"use strict";
  
let posts = [];

for (let i = 1; i <= 20; i++) {
	
	let hashTag = ['#Reapers'];
	let like = ['Government'];
	let post = {

	id: i.toString(),

	description: 'Look from which reaper I have saved the Earth this time.',

	createdAt: new Date(),

	author: 'David Shepard',

	photoLink: 'https://cdn.wallpapersafari.com/81/6/gZRdG2.jpg',
   
	hashTags: hashTag,
   
	likes: like,

	};
  
	posts.push(post);
}

