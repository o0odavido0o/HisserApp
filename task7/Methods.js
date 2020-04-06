"use strict";

class PostCollection {

	_postCollection = [];

	constructor(postCollection) {
		this._postcollection = postCollection;
	}

	addAll(postCollection) {

		let trashCollection = [];

		for (let i = 0; i < postCollection.length; i++) {

			if (PostCollection.validate(postCollection[i])) {
				this._postCollection.push(postCollection[i]);
			} else {
				trashCollection.push(postCollection[i]);
			}
		}

		return trashCollection;
	}

	getPage(skip = 0, quantity = 10, filters) {

		if (skip === undefined || quantity === undefined) {
			return undefined;
		}

		let filteredPosts1 = [];

		for (let i = skip; i < quantity; i++) {

			filteredPosts1.push(this._postCollection[i]);
		}

		if (filters !== undefined && filters.author !== undefined && filters.author.length !== 0) {

			filteredPosts1 = filteredPosts1.filter(post => post.author == filters.author);
		}

		if (filters !== undefined && filters.createdAt !== undefined) {

			filteredPosts1 = filteredPosts1.filter(post => post.createdAt == filters.createdAt);
		}

		if (filters !== undefined && filters.hashTags !== undefined && filters.hashTags.length !== 0) {

			filteredPosts1 = filteredPosts1.filter(post => this.contains(post.hashTags, filters.hashTags));
		}

		return filteredPosts1.sort(this.compareData);
	}

	contains(container, element) {

		if (element.length === 0) {
			return true;
		}

		if (container.length === 0) {
			return false;
		}

		for (let i = 0; i < element.length; i++) {

			if (!container.includes(element[i])) {

				return false;
			}
		}

		return true;
	}

	compareData(post1, post2) {
		return post2.createdAt - post1.createdAt;
	}

	get(id) {

		for (let post of this._postCollection) {

			if (post && post.id === id) {
				return post;
			}
		}

		return undefined;
	}

	add(post) {

		if (!PostCollection.validate(post)) {
			return false;
		}

		this._postCollection.push(post);

		return true;
	}

	edit(id, post) {

		for (let i = 0; i < this._postCollection.length; i++) {

			if (this._postCollection[i].id === id) {

				if (post.description === undefined) {
					post.description = this._postCollection[i].description;
				}

				if (post.photoLink === undefined) {
					post.photoLink = this._postCollection[i].photoLink;
				}

				if (post.hashTags === undefined) {
					post.hashTags = this._postCollection[i].hashTags;
				}

				post.id = this._postCollection[i].id;
				post.createdAt = this._postCollection[i].createdAt;
				post.author = this._postCollection[i].author;
				post.likes = this._postCollection[i].likes;

				if (!PostCollection.validate(post)) {
					return false;
				}

				this._postCollection[i] = post;
				break;
			}
		}

		return true;
	}

	remove(id) {

		let flag = 0;

		for (let i = 0; i < this._postCollection.length; i++) {

			if (this._postCollection[i].id === id) {

				flag = 1;
			}

			if (flag === 1) {

				if (i !== this._postCollection.length - 1) {
					this._postCollection[i] = this._postCollection[i + 1];
				} else {
					this._postCollection.pop();
				}
			}
		}

		return true;
	}

	clear() {

		for (let i = 0; i < this._postCollection; i++) {
			this._postcollection.pop();
		}
	}

	static validate(post) {

		if (post.id === undefined) {
			return false;
		}

		if (post.description.length >= 200 || post.description === undefined) {
			return false;
		}

		if (post.createdAt === undefined) {
			return false;
		}

		if (post.author === undefined) {
			return false;
		} else if (post.author.length === 0) {
			return false;
		}

		if (post.photoLink === undefined) {
			return false;
		}

		if (post.hashTags === undefined) {
			return false;
		}

		if (post.likes === undefined) {
			return false;
		}

		return true;
	}

}

var addedPost = {

	id: '21',

	description: 'New day. New darkspawns.',

	createdAt: new Date(),

	author: 'Gray Warden',

	photoLink: 'https://stopga.me/images/news/2019/01/20/AQNKb1HD.jpg',

	hashTags: ['#darkspawns', '#deadsoldiers'],

	likes: ['Gray Order'],

};

var editedPost = {

	id: '0',

	description: 'New day. New darkspawns.',

	createdAt: new Date(),

	author: '',

	photoLink: 'https://stopga.me/images/news/2019/01/20/AQNKb1HD.jpg',

	hashTags: ['#darkspawns'],

	likes: [],

};

var filters = {

	author: 'Gray Warden',

	hashTags: ['#darkspawns'],

};

let postCollection = new PostCollection(posts);
postCollection.clear();
postCollection.addAll(posts);
console.log(" Вывод всех постов:");
console.log(postCollection.getPage(0, 20));
console.log(" Добавление валидного поста:");
console.log(postCollection.add(addedPost));
console.log(" Добавление не валидного поста:");
console.log(postCollection.add(1));
console.log(" Проверка добавленного поста и метода getPost:");
console.log(postCollection.get("21"));
console.log(postCollection.get('13'));
postCollection.edit('13', editedPost);
console.log("  Измененный пост:");
console.log(postCollection.get('13'));
console.log(" Проверка метода getPosts без фильтра:");
console.log(postCollection.getPage(0, 21));
console.log(" Проверка метода getPosts с фильтром:");
console.log(postCollection.getPage(0, 21, filters));
console.log(" Проверка метода removePost:");
postCollection.remove('21');
console.log(postCollection.get('21'));