"use strict";

class PostsFilling {

	_postCollection;

	constructor() {
		this._postCollection = JSON.parse(localStorage.getItem("postFilling"));
		this._postCollection.forEach(post => post.createdAt = new Date(post.createdAt));
	}

	addAll(postCollection) {

		let trashCollection = [];

		postCollection.forEach(function(item, i, arr) {
			if (PostsFilling.validate(item)){
				this._postCollection.push(item);
			} else {
				trashCollection.push(item);
			}
		});

		localStorage.setItem("postFilling", JSON.stringify(this._postCollection));

		return trashCollection;
	}

	getPage(skip = 0, quantity = 10, filters) {

		if (skip === undefined || quantity === undefined) {
			return undefined;
		}

		let filteredPosts1 = this._postCollection;

		if (filters && filters.author && filters.author.length) {
			filteredPosts1 = filteredPosts1.filter(post => post.author == filters.author);
		}
		if (filters && filters.createdAt && filters.createdAt.length) {
			filteredPosts1 = filteredPosts1.filter(post => post.createdAt.getDate() == filters.createdAt[0]);
			filteredPosts1 = filteredPosts1.filter(post => post.createdAt.getMonth() + 1 == filters.createdAt[1]);
			filteredPosts1 = filteredPosts1.filter(post => post.createdAt.getFullYear() == filters.createdAt[2]);
		}
		if (filters && filters.hashTags && filters.hashTags.length) {
			filteredPosts1 = filteredPosts1.filter(post => this.contains(post.hashTags, filters.hashTags));
		}

		filteredPosts1.sort(this.compareDate);

		return filteredPosts1.slice(skip, skip + quantity);
	}

	contains(container, element) {

		if (!element.length) {
			return true;
		}

		if (!container.length) {
			return false;
		}

		return element.every(elem => container.includes(elem));
	}

	compareDate(post1, post2) {
		return post2.createdAt - post1.createdAt;
	}

	get(id) {
		return this._postCollection.find(post => post.id === id);
	}

	add(post) {

		if (!PostsFilling.validate(post)) {
			return false;
		}

		this._postCollection.push(post);

		localStorage.setItem("postFilling", JSON.stringify(this._postCollection));

		return true;
	}

	edit(id, post) {

		let oldPost = this._postCollection.find(post => post.id === id);

		if (!post.description) {
			post.description = oldPost.description;
		}

		if (!post.photoLink) {
			post.photoLink = oldPost.photoLink;
		}

		if (!post.hashTags) {
			post.hashTags = oldPost.hashTags;
		}

		post.id = oldPost.id;
		post.createdAt = oldPost.createdAt;
		post.author = oldPost.author;
		post.likes = oldPost.likes;

		if (!PostsFilling.validate(post)) {
			return false;
		}

		oldPost.description = post.description;
		oldPost.photoLink = post.photoLink;
		oldPost.hashTags = post.hashTags;

		localStorage.setItem("postFilling", JSON.stringify(this._postCollection));

		return true;
	}

	remove(id) {
		this._postCollection = this._postCollection.filter(post => post.id !== id);

		localStorage.setItem("postFilling", JSON.stringify(this._postCollection));

		return true;
	}

	clear() {
		this._postCollection = [];
		localStorage.setItem("postFilling", JSON.stringify(this._postCollection));
	}

	static validate(post) {

		if (!post.id) {
			return false;
		}

		if (!post.description || post.description.length >= 200) {
			return false;
		}

		if (!post.createdAt) {
			return false;
		}

		if (!post.author) {
			return false
		}

		if (!post.photoLink) {
			return false;
		}

		if (!post.hashTags || !Array.isArray(post.hashTags)) {
			return false;
		}

		if (!post.likes || !Array.isArray(post.likes)) {
			return false;
		}

		return true;
	}

	addLike(id, userName){

		let post = this.get(id);
		if(!post){
			return false;
		}

		if(post.likes.indexOf(userName) === -1) {
			post.likes.push(userName);
		}else{
			return false;
		}

		localStorage.setItem("postFilling", JSON.stringify(this._postCollection));

		return true;
	}

	removeLike(id, userName){

		let post = this.get(id);
		if(!post){
			return false;
		}

		if(post.likes.indexOf(userName) !== -1) {
			post.likes.splice(post.likes.indexOf(userName), 1);
		}else{
			return false;
		}

		localStorage.setItem("postFilling", JSON.stringify(this._postCollection));

		return true;
	}
}