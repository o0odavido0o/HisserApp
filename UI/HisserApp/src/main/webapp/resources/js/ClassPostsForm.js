"use strict";

class PostsForm {

    _postsFilling;
    _postForm;

    constructor() {

        this._postsFilling = postsFilling;

        this._postForm = document.createElement("div");
        this._postForm.classList.add("post");
        this._postForm.innerHTML = `
	<div class="author">
        <img id="authorImg" class="authorImg" src="" alt="authorImg">
        <div class="authorInfo">
            <p class="authorName"></p>
            <p class="datetime"></p>
        </div>
    </div>
    <div class="content"></div>
    <div class="hashTags">#darkspawns</div>
    <input class="likeImg" type="image" src="resources/Images/Forms/UnLike.png" alt="Like">
    <input class="deleteImg" type="image" src="resources/Images/Forms/Delete.jpg" alt="Delete">
    <input class="editImg" type="image" src="resources/Images/Forms/Edit.jpg" alt="Edit">
`;
    }

    createPost(postFilling){

        let postForm = this._postForm.cloneNode(true);

        postForm.id = postFilling.id;
        postForm.getElementsByClassName("authorImg").item(0).src = postFilling.photoLink;
        postForm.getElementsByClassName("authorName").item(0).textContent = postFilling.author;
        postForm.getElementsByClassName("datetime").item(0).textContent = postFilling.createdAt.toLocaleString();

        if(postFilling.description.length===0){
            postForm.removeChild(postForm.getElementsByClassName("content").item(0));
        }else{
            postForm.getElementsByClassName("content").item(0).textContent = postFilling.description;
        }

        if(postFilling.hashTags.length===0){
            postForm.removeChild(postForm.getElementsByClassName("hashTags").item(0));
        }else{
            postForm.getElementsByClassName("hashTags").item(0).textContent = postFilling.hashTags.join('');
        }

        return postForm;
    }

    showPostsFeed(skip = 0, quantity = 10, filters){

        let main = document.querySelector("main");
        let postsToShow = this._postsFilling.getPage(skip, quantity, filters);
        let postForm;
        let user = JSON.parse(localStorage.getItem("userFilling"));

        for(let i = 0; i < postsToShow.length; i++){

            postForm = this.createPost(postsToShow[i]);
            if (user !== null && user.name === postsToShow[i].author) {
                this.showDeleteButton(postForm);
                this.showEditButton(postForm);
            }else{
                this.closeDeleteButton(postForm);
                this.closeEditButton(postForm);
            }

            if(user !== null && postsToShow[i].likes.indexOf(user.name) !== -1){
                this.showLikeButton(postForm);
            }else{
                this.showUnLikeButton(postForm);
            }

            main.insertBefore(postForm, document.getElementById("updateButton"));
        }
    }

    closePostsFeed(){

        let main = document.querySelector("main");
        let postsOnPage = main.getElementsByClassName("post");

        while(postsOnPage.length > 0){
            main.removeChild(postsOnPage.item(0));
        }
    }

    add(postFilling) {

        if (!this._postsFilling.add(postFilling)) {
            return false;
        }

        let main = document.querySelector("main");

        let postForm = this.createPost(postFilling);
        this.showDeleteButton(postForm);
        this.showEditButton(postForm);

        main.insertBefore(postForm, document.getElementsByClassName("post").item(0));

        return true;
    }

    remove(id) {

        if (!this._postsFilling.remove(id)) {
            return false;
        }

        let main = document.querySelector("main");
        main.removeChild(document.getElementById(id));

        return true;
    }

    edit(id, postFilling) {

        if (!this._postsFilling.edit(id, postFilling)) {
            return false;
        }

        let postForm = document.getElementById(id);

        postForm.getElementsByClassName("content").item(0).textContent = postFilling.description;
        postForm.getElementsByClassName("hashTags").item(0).textContent = postFilling.hashTags.join('');

        return true;
    }

    addLike(id, post){

        if(!post){
            return false;
        }

        let user = JSON.parse(localStorage.getItem("userFilling"));

        if (!this._postsFilling.addLike(id, user.name)) {
            return false;
        }

        post.getElementsByTagName("input").item(0).src = "resources/Images/Forms/Like.png";

        return true;
    }

    removeLike(id, post){

        if(!post){
            return false;
        }

        let user = JSON.parse(localStorage.getItem("userFilling"));

        if (!this._postsFilling.removeLike(id, user.name)) {
            return false;
        }

        post.getElementsByTagName("input").item(0).src="resources/Images/Forms/UnLike.png";

        return true;
    }

    showLikeButton(post){
        post.getElementsByTagName("input").item(0).src="resources/Images/Forms/Like.png";
    }

    showUnLikeButton(post){
        post.getElementsByTagName("input").item(0).src="resources/Images/Forms/UnLike.png";
    }

    showDeleteButton(post){
        post.getElementsByTagName("input").item(1).style.visibility="visible";
    }

    closeDeleteButton(post){
        post.getElementsByTagName("input").item(1).style.visibility="hidden";
    }

    showEditButton(post){
        post.getElementsByTagName("input").item(2).style.visibility="visible";
    }

    closeEditButton(post){
        post.getElementsByTagName("input").item(2).style.visibility="hidden";
    }
}