"use strict";

class PostSectionController {

    constructor() {
        document.getElementById("signUpHeaderButton").addEventListener("click", this.signUp);
        document.getElementById("exitHeaderButton").addEventListener("click", this.exit);
        document.getElementById("filters").addEventListener("change", this.filter);
        document.getElementById("createButton").addEventListener("click", this.create);
        document.getElementsByTagName("main").item(0).addEventListener("click", this.like);
        document.getElementsByTagName("main").item(0).addEventListener("click", this.edit);
        document.getElementsByTagName("main").item(0).addEventListener("click", this.delete);
        document.getElementById("updateButton").addEventListener("click", this.update);
    }

    signUp(){
        SUview.showWindow();
        PSview.closeSignUpButton();
    }

    filter(skip = 0, quantity = 10){

        if(skip.type == "change"){
            skip = 0;
        }

        let filters = {

            author: "",

            createdAt: "",

            hashTags: "",

        };

        let inputs = document.getElementById("filters").getElementsByTagName("input");
        if(inputs.item(0).value != "Name") {
            filters.author = inputs.item(0).value;
        }
        if(inputs.item(1).value != "DD.MM.YY" && inputs.item(1).value != "") {
            filters.createdAt = inputs.item(1).value.split(".");
        }
        if(inputs.item(2).value != "#Tags" && inputs.item(2).value != "") {
            filters.hashTags = inputs.item(2).value.split(" ");
        }

        postsForm.closePostsFeed();
        postsForm.showPostsFeed(skip, quantity, filters);
    }

    exit(){
        PSview.closeUser();
        PSview.closeExitButton();
        PSview.showSignUpButton();
        PSview.closeCreateButton();
        PSview.exit();
    }

    create(){

        document.getElementById("creationContent").value = "Text";
        document.getElementById("creationTags").value = "#Tags";

        Cview.showWindow();
        Cview.showUser();
        Cview.showPublishButton();
        PSview.closeCreateButton();
        PSview.closeExitButton();
        PSview.closeCreateButton();
    }

    edit(){

        if (event.target.className !== 'editImg') {
            return;
        }

        let content = event.target.parentElement.getElementsByClassName("content").item(0).textContent;
        let hashTags = event.target.parentElement.getElementsByClassName("hashTags").item(0).textContent;
        document.getElementById("creationContent").value = content;
        document.getElementById("creationTags").value = hashTags;

        localStorage.setItem("idOfEditPost", event.target.parentElement.id);

        Cview.showWindow();
        Cview.showEditButton();
        Cview.showUser();
        PSview.closeCreateButton();
        PSview.closeExitButton();
        PSview.closeCreateButton();
    }

    delete(){

        if (event.target.className !== 'deleteImg') {
            return;
        }

        let post = event.target.parentElement;
        postsForm.remove(post.id);
    }

    like(){

        if (event.target.className !== 'likeImg') {
            return;
        }

        let post = event.target.parentElement;
        if(!postsForm.addLike(post.id, post)){
            postsForm.removeLike(post.id, post);
        }
    }

    update(){
        PSview.update();
    }
}