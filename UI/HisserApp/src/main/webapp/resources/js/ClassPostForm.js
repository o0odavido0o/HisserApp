"use strict";

class PostForm {

    _postCollection;
    _userView;
    _postForm;

    constructor(postCollection=[], userView = undefined) {

        this._postCollection = new PostFilling(postCollection);

        this._userView=userView;

        this._postForm = document.createElement("div");
        this._postForm.classList.add("post");
        this._postForm.innerHTML = `
	<div class="author">
        <img id="authorImg" class="authorImg" src="resources/Images/PostFilling/GreyWarden.jpg" alt="authorImg">
        <div class="authorInfo">
            <p class="authorName">Grey Warden</p>
            <p class="datetime"> 6.3.2020 12:23</p>
        </div>
    </div>
    <div class="content">New day. New darkspawns.</div>
    <div class="hashTags">#darkspawns</div>
    <input id="likeImg" type="image" src="resources/Images/Forms/UnLike.png" alt="Like">
    <input id="deleteImg" type="image" src="resources/Images/Forms/Delete.jpg" alt="Delete">
    <input id="editImg" type="image" src="resources/Images/Forms/Edit.jpg" alt="Edit">
`;
    }

    createPost(postFilling){

        let postForm = this._postForm.cloneNode(true);

        postForm.id = postFilling.id;
        postForm.getElementsByClassName("authorImg").item(0).src=postFilling.photoLink;
        postForm.getElementsByClassName("authorName").item(0).textContent=postFilling.author;
        postForm.getElementsByClassName("datetime").item(0).textContent = postFilling.createdAt.toLocaleString();
        if(postFilling.description.length===0){
            postForm.removeChild(postForm.getElementsByClassName("content").item(0));
        }else{
            postForm.getElementsByClassName("content").item(0).textContent=postFilling.description;
        }

        if(postFilling.hashTags.length===0){
            postForm.removeChild(postForm.getElementsByClassName("hashTags").item(0));
        }else{
            postForm.getElementsByClassName("hashTags").item(0).textContent=postFilling.hashTags.join('');
        }

        postForm.getElementsByTagName("input").item(1).style.visibility="hidden";
        postForm.getElementsByTagName("input").item(2).style.visibility="hidden";

        return postForm;
    }

    showPostsFeed(){

        let main = document.querySelector("main");
        let postsToShow = this._postCollection.getPage();
        let postForm;

        for(let i = 0; i < 10; i++){

            postForm = this.createPost(postsToShow[i]);
            if(this._userView !== undefined) {
                if (this._userView.getUser().name === postsToShow[i].author) {
                    this._userView.showDeleteButton(postForm);
                    this._userView.showEditButton(postForm);
                }

                if(postsToShow[i].likes.indexOf(this._userView.getUser().name)!==-1){
                    postForm.getElementsByTagName("input").item(0).src="resources/Images/Forms/Like.png";
                }
            }

            main.insertBefore(postForm, document.getElementById("updateButton"));
        }
    }

    add(postFilling) {

        if (!this._postCollection.add(postFilling)) {
            return false;
        }

        let main = document.querySelector("main");

        let postForm = this.createPost(postFilling);
        if(this._userView !== undefined) {
            this._userView.showDeleteButton(postForm);
            this._userView.showEditButton(postForm);
        }

        main.insertBefore(postForm, document.getElementsByClassName("post").item(0));

        return true;
    }

    remove(id) {

        if (!this._postCollection.remove(id)) {
            return false;
        }

        let main = document.querySelector("main");
        main.removeChild(document.getElementById(id));

        return true;
    }

    edit(id, postFilling) {

        if (!this._postCollection.edit(id, postFilling)) {
            return false;
        }

        let postForm = document.getElementById(id);

        postForm.getElementsByClassName("content").item(0).textContent=postFilling.description;
        postForm.getElementsByClassName("hashTags").item(0).textContent=postFilling.hashTags.join('');

        return true;
    }

    get(id) {
        return document.getElementById(id);
    }
}