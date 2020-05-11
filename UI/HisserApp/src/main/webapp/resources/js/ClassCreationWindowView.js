"use strict";

class CreationWindowView {

    /*publish(){

        let user = JSON.parse(localStorage.getItem("userFilling"));

        let post = {

            id: "",

            description: "",

            createdAt: new Date(),

            author: "",

            photoLink: "",

            hashTags: [],

            likes: [],

        };

        post.id = localStorage.getItem("newId");
        post.description = document.getElementById("creationContent").textContent;
        post.author = user.name;
        post.photoLink = user.photoLink;
        post.hashTags = document.getElementById("creationTags").textContent.split(" ");

        postsForm.add(post);

        document.getElementById("creationContent").textContent = "Text";
        document.getElementById("creationTags").textContent = "Tags";

        PSview = new PostSectionView();

        Cview.closeWindow();
        PSview.showExitButton();
        PSview.showCreateButton();
    }*/

    showWindow(){
        document.getElementById("creationPostWindow").style.visibility = "visible";
        document.getElementsByTagName("main").item(0).style.opacity = 0.5;
    }

    closeWindow(){
        document.getElementById("creationPostWindow").style.visibility = "hidden";
        document.getElementsByTagName("main").item(0).style.opacity = 1;
    }

    showUser(){
        let user = JSON.parse(localStorage.getItem("userFilling"));
        document.getElementById("creator").getElementsByTagName("span").item(0).textContent = user.name;
    }

    showPublishButton(){
        document.getElementById("publishButton").style.visibility = "visible";
    }

    closePublishButton(){
        document.getElementById("publishButton").style.visibility = "hidden";
    }

    showEditButton(){
        document.getElementById("editButton").style.visibility = "visible";
    }

    closeEditButton(){
        document.getElementById("editButton").style.visibility = "hidden";
    }
}