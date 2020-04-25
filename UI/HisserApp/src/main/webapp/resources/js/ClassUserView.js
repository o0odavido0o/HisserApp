"use strict";

class UserView {

    _user;
    _postCollection;

    constructor(user, postCollection) {

        this._user = user;
        this._postCollection = new PostFilling(postCollection);

        //this.showUser(user);
        //this.showCreateButton();

        let postsFromSite1=document.getElementsByClassName("post");

        for(let i=0;i<postsFromSite1.length;i++) {

            if (name === postsFromSite1.item(i).getElementsByClassName("authorName").item(0).textContent) {
                this.showDeleteButton(postsFromSite1.item(i));
                this.showEditButton(postsFromSite1.item(i));
            }

            if(this._postCollection.get(postsFromSite1.item(i).id).likes.indexOf(name)!==-1){
                this.addLike(postsFromSite1.item(i).id, postsFromSite1.item(i));
            }
        }
    }

    getUser(){
        return this._user;
    }

    showUser(user){

        document.getElementsByTagName("header").item(0).getElementsByTagName("img").item(0).src=user.photoLink;
        document.getElementsByTagName("header").item(0).getElementsByTagName("p1").item(0).textContent=user.name;
        document.getElementsByTagName("header").item(0).getElementsByClassName("user").item(0).style.visibility="visible";

        return true;
    }

    showCreateButton(){

        document.getElementById("createButton").style.position="relative";
        document.getElementById("createButton").style.visibility="visible";

        return true;
    }

    showDeleteButton(post){

        post.getElementsByTagName("input").item(1).style.visibility="visible";

        return true;
    }

    showEditButton(post){

        post.getElementsByTagName("input").item(2).style.visibility="visible";

        return true;
    }

    addLike(id, post){

        if(!post){
            return false;
        }

        if (!this._postCollection.addLike(id, this._user.name)) {
            return false;
        }

        post.getElementsByTagName("input").item(0).src="resources/Images/Forms/Like.png";

        return true;
    }

    removeLike(id, post){

        if(!post){
            return false;
        }

        if (!this._postCollection.removeLike(id, this._user.name)) {
            return false;
        }

        post.getElementsByTagName("input").item(0).src="resources/Images/Forms/UnLike.png";

        return true;
    }
}