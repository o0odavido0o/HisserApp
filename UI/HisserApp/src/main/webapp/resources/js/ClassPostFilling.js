"use strict";

class PostFilling {

	_postCollection = [];

	constructor(postCollection= []) {
		this._postCollection = postCollection;
	}

	AddAll(postCollection) {

		let trashCollection = [];

		postCollection.forEach(function(item, i, arr) {
			if (PostFilling.Validate(item)){
				this._postCollection.push(item);
			} else {
				trashCollection.push(item);
			}
		});

		return trashCollection;
	}

	GetPage(skip = 0, quantity = 10, filters) {

		if (skip === undefined || quantity === undefined) {
			return undefined;
		}

		let filteredPosts1 = this._postCollection;

		if (filters !== undefined && filters.author !== undefined && filters.author.length !== 0) {
			filteredPosts1 = filteredPosts1.filter(post => post.author == filters.author);
		}
		if (filters !== undefined && filters.createdAt !== undefined) {
			filteredPosts1 = filteredPosts1.filter(post => post.createdAt == filters.createdAt);
		}
		if (filters !== undefined && filters.hashTags !== undefined && filters.hashTags.length !== 0) {
			filteredPosts1 = filteredPosts1.filter(post => this.Contains(post.hashTags, filters.hashTags));
		}

		filteredPosts1=this._postCollection.slice(skip, skip + quantity);

		return filteredPosts1.sort(this.CompareData);
	}

	Contains(container, element) {

		if (!element.length) {
			return true;
		}

		if (!container.length) {
			return false;
		}

		for (let i = 0; i < element.length; i++) {

			if (!container.includes(element[i])) {

				return false;
			}
		}

		return true;
	}

	CompareData(post1, post2) {
		return post1.createdAt - post2.createdAt;
	}

	Get(id) {
		return this._postCollection.find(post => post.id === id);
	}

	Add(post) {

		if (!PostFilling.Validate(post)) {
			return false;
		}

		this._postCollection.push(post);

		return true;
	}

	Edit(id, post) {

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

		post.id = this._postCollection[i].id;
		post.createdAt = this._postCollection[i].createdAt;
		post.author = this._postCollection[i].author;
		post.likes = this._postCollection[i].likes;

		if (!PostFilling.Validate(post)) {
			return false;
		}

		oldPost.description = post.description;
		oldPost.photoLink = post.photoLink;
		oldPost.hashTags = post.hashTags;

		return true;
	}

	Remove(id) {
		this._postCollection = this._postCollection.filter(post => post.id !== id);
		return true;
	}

	Clear() {
		this._postCollection = [];
	}

	static Validate(post) {

		if (!post.id) {
			return false;
		}

		if (post.description.length >= 200 || !post.description) {
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