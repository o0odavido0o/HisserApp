"use strict";

class UserView {

    _user;
    _postCollection;

    constructor(user, postCollection) {

        this._user = user;
        this._postCollection = new PostFilling(postCollection);

        this.showUser(user);
        this.showCreateButton();

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

        let newUser = document.createElement("div");
        newUser.classList.add("user");
        newUser.innerHTML = `
	<img id="userImg" src="" alt="userImg">
    <p1 id="userName"></p1>
`;
        newUser.getElementsByTagName("img").item(0).src=user.photoLink;
        newUser.getElementsByTagName("p1").item(0).textContent=user.name;
        document.getElementsByTagName("header").item(0).appendChild(newUser);

        return true;
    }

    showCreateButton(){

        let CreateButton = document.createElement("button");
        CreateButton.id="createButton";
        CreateButton.type="button";
        CreateButton.textContent="Create";
        document.getElementsByTagName("main").item(0).insertBefore(CreateButton, document.getElementsByClassName("filters").item(0));

        return true;
    }

    showDeleteButton(post){

        let DeleteButton = document.createElement("input");
        DeleteButton.id="deleteImg";
        DeleteButton.type="image";
        DeleteButton.src="resources/Images/Forms/Delete.jpg";
        DeleteButton.alt="Delete";
        post.appendChild(DeleteButton);

        return true;
    }

    showEditButton(post){

        let EditButton = document.createElement("input");
        EditButton.id="editImg";
        EditButton.type="image";
        EditButton.src="resources/Images/Forms/Edit.jpg";
        EditButton.alt="Edit";
        post.appendChild(EditButton);

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