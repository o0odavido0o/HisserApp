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
    <input id="likeImg" type="image" src="resources/Images/Forms/Like.png" alt="Like">
`;
    }

    CreatePost(postFilling){

        let postForm = this._postForm.cloneNode(true);

        postForm.id = postFilling.id;
        postForm.getElementsByClassName("authorImg").item(0).src=postFilling.photoLink;
        postForm.getElementsByClassName("authorName").item(0).textContent=postFilling.author;
        postForm.getElementsByClassName("datetime").item(0).textContent = postFilling.createdAt.getDate().toString() + "." + (postFilling.createdAt.getMonth()+1).toString() + "."
            + postFilling.createdAt.getFullYear().toString() + " " + postFilling.createdAt.getHours().toString() + ":" + postFilling.createdAt.getMinutes().toString();

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

        return postForm;
    }

    ShowPostsFeed(){

        let main = document.querySelector("main");
        let postsToShow = this._postCollection.GetPage();
        let postForm;

        for(let i = 0; i < 10; i++){

            postForm = this.CreatePost(postsToShow[i]);
            if(this._userView !== undefined) {
                if (this._userView.GetUser().name === postsToShow[i].author) {
                    this._userView.ShowDeleteButton(postForm);
                    this._userView.ShowEditButton(postForm);
                }
            }

            main.insertBefore(postForm, document.getElementById("updateButton"));
        }
    }

    Add(postFilling) {

        if (!this._postCollection.Add(postFilling)) {
            return false;
        }

        let main = document.querySelector("main");

        let postForm = this.CreatePost(postFilling);
        if(this._userView !== undefined) {
            this._userView.ShowDeleteButton(postForm);
            this._userView.ShowEditButton(postForm);
        }

        main.insertBefore(postForm, document.getElementsByClassName("post").item(0));

        return true;
    }

    Remove(id) {

        if (!this._postCollection.Remove(id)) {
            return false;
        }

        let main = document.querySelector("main");
        main.removeChild(document.getElementById(id));

        return true;
    }

    Edit(id, postFilling) {

        if (!this._postCollection.Edit(id, postFilling)) {
            return false;
        }

        let postForm = document.getElementById(id);

        postForm.getElementsByClassName("content").item(0).textContent=postFilling.description;
        postForm.getElementsByClassName("hashTags").item(0).textContent=postFilling.hashTags.join('');

        return true;
    }
}