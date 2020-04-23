"use strict";

class PostFilling {

	_postCollection = [];

	constructor(postCollection= []) {
		this._postCollection = postCollection;
	}

	addAll(postCollection) {

		let trashCollection = [];

		postCollection.forEach(function(item, i, arr) {
			if (PostFilling.validate(item)){
				this._postCollection.push(item);
			} else {
				trashCollection.push(item);
			}
		});

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
		if (filters && filters.createdAt) {
			filteredPosts1 = filteredPosts1.filter(post => post.createdAt == filters.createdAt);
		}
		if (filters && filters.hashTags && filters.hashTags.length) {
			filteredPosts1 = filteredPosts1.filter(post => this.contains(post.hashTags, filters.hashTags));
		}

		filteredPosts1=this._postCollection.slice(skip, skip + quantity);

		return filteredPosts1.sort(this.compareDate);
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
		return post1.createdAt - post2.createdAt;
	}

	get(id) {
		return this._postCollection.find(post => post.id === id);
	}

	add(post) {

		if (!PostFilling.validate(post)) {
			return false;
		}

		this._postCollection.push(post);

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

		if (!PostFilling.validate(post)) {
			return false;
		}

		oldPost.description = post.description;
		oldPost.photoLink = post.photoLink;
		oldPost.hashTags = post.hashTags;

		return true;
	}

	remove(id) {
		this._postCollection = this._postCollection.filter(post => post.id !== id);
		return true;
	}

	clear() {
		this._postCollection = [];
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
}