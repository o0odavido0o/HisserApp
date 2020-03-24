"use strict";

(function() {
	
	function getPosts(filters, start = 1, quantity = 10){
		
		let filteredPosts1 = [];
		let filteredPosts2 = [];
		
		for(let i = start - 1; i < start + quantity - 1; i++){
			
			filteredPosts1.push(posts[i]);
		}
		
		if(filters.author != undefined && filters.author.length != 0){
		
		filteredPosts2 = filteredPosts1;
		filteredPosts1 = [];
			
			for(let i = 0; i < filteredPosts2.length; i++){
				
				if(filteredPosts2[i].author==filters.author){
					filteredPosts1.push(filteredPosts2[i]);
				}
			}
		}
		
		if(filters.createdAt != undefined){
			
		filteredPosts2 = filteredPosts1;
		filteredPosts1 = [];
		
			for(let i = 0; i < filteredPosts2.length; i++){
				
				if(filteredPosts2[i].createdAt==filters.createdAt){
					filteredPosts1.push(filteredPosts2[i]);
				}
			}
		}
		
		if(filters.hashTags != undefined && filters.hashTags.length != 0){
			
		filteredPosts2 = filteredPosts1;
		filteredPosts1 = [];
		
			for(let i = 0; i < filteredPosts2.length; i++){
				
				if(contains(filteredPosts2[i].hashTags, filters.hashTags)){
					filteredPosts1.push(filteredPosts2[i]);
				}
			}
		}
		
		return sort(filteredPosts1);
	}
	
	function contains(container, element){
		
		if(element.length == 0){
			return true;
		}
		
		if(container.length == 0){
			return false;
		}
		
		for(let i=0; i<element.length;i++){
			
			if(!container.includes(element[i])){
				
				return false;
			}
		}
		
		return true;
	}
	
	function sort(posts){
		
		for(let i=0; i<posts.length;i++){
			
			for(let j=0; j<posts.length-1;j++){
				
				if(compareData(posts[j],posts[j+1])<0){
					
					let post=posts[j];
					posts[j]=posts[j+1];
					posts[j+1]=post;
				}
			}
		}
		
		return posts;
	}
	
	function compareData(post1, post2){
		return post2.createdAt - post1.createdAt;
	}
	
	function getPost(id){
		
		for (let post of posts) {
			
			if(post != undefined){
				
				if(post.id==id){
					return post;
				}
			}
		}
		
		return undefined;
	}
	
	function validatePost(post){
		
		if(post.id == undefined){
			return false;
		}
		
		if(post.description.length >= 200 || post.description == undefined){
			return false;
		}
		
		if(post.createdAt == undefined){
			return false;
		}
		
		if(post.author.length == 0 || post.author == undefined){
			return false;
		}
		
		if(post.photoLink == undefined){
			return false;
		}
		
		if(post.hashTags == undefined){
			return false;
		}
		
		if(post.likes == undefined){
			return false;
		}
		
		return true;
	}
	
	function addPost(post){
		
		if(!validatePost(post)){
			return false;
		}
		
		if (posts.length + 1 == posts.push(post)){
			return true;
		}
		
		return false;
	}
	
	function editPost(id, post){
		
		for(let i = 0; i < posts.length; i++){
			
			if(posts[i].id==id){
				
				if(post.description == undefined){
					post.description=posts[i].description;
				}
				
				if(post.photoLink == undefined){
					post.photoLink=posts[i].photoLink;
				}
				
				if(post.hashTags == undefined){
					post.hashTags=posts[i].hashTags;
				}
				
				post.id=posts[i].id;
				post.createdAt=posts[i].createdAt;
				post.author=posts[i].author;
				post.likes=posts[i].likes;
				
				if(!validatePost(post)){
					return false;
				}
				
				posts[i]=post;
				break;
			}
		}
		
		return true;
	}
	
	function removePost(id){
		
		let flag = 0;
		
		for(let i = 0; i < posts.length; i++){
			
			if(posts[i].id == id){
				
				flag = 1;
			}
			
			if(flag == 1){
				
				if(i != posts.length - 1){
					posts[i]=posts[i+1];
				}else{
					posts.pop();
				}
			}
		}
		
		return true;
	}
	
	var addedPost={

	id: '21',

	description: 'New day. New darkspawns.',

	createdAt: new Date(),

	author: 'Gray Warden',
   
	photoLink: 'https://stopga.me/images/news/2019/01/20/AQNKb1HD.jpg',
	
	hashTags: ['#darkspawns', '#deadsoldiers'],
   
	likes: ['Gray Order'],

	};
	
	var editedPost={

	id: '0',

	description: 'New day. New darkspawns.',

	createdAt: new Date(),

	author: '',
   
	photoLink: 'https://stopga.me/images/news/2019/01/20/AQNKb1HD.jpg',
	
	hashTags: ['#darkspawns'],
   
	likes: [],

	};
	
	var filters={

	author: 'Gray Warden',
	
	hashTags: ['#darkspawns'],
	
	};
	
	console.log(" Вывод всех постов:");
	console.log(posts);
	console.log(" Добавление валидного поста:");
	console.log(addPost(addedPost));
	console.log(" Добавление не валидного поста:");
	console.log(addPost(1));
	console.log(" Проверка добавленного поста и метода getPost:");
	console.log(getPost(21));
	console.log(" Проверка метода editPost:");
	console.log("  Неизмененный пост:");
	console.log(getPost('13'));
	editPost('13', editedPost);
	console.log("  Измененный пост:");
	console.log(getPost('13'));
	console.log(" Проверка метода getPosts без фильтра:");
	console.log(getPosts(0));
	console.log(" Проверка метода getPosts с фильтром:");
	console.log(getPosts(filters, 12));
	console.log(" Проверка метода removePost:");
	removePost('13');
	console.log(posts);
}());