"use strict";

class CreationWindowController {

    constructor() {
        document.getElementById("closeCreationButton").addEventListener("click", this.close);
        document.getElementById("publishButton").addEventListener("click", this.publish);
        document.getElementById("editButton").addEventListener("click", this.edit);
    }

    publish(){

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
        localStorage.setItem("newId", JSON.stringify(parseInt(localStorage.getItem("newId")) + 1));
        post.description = document.getElementById("creationContent").value;
        post.author = user.name;
        post.photoLink = user.photoLink;
        post.hashTags = document.getElementById("creationTags").value.split(" ");

        postsForm.add(post);

        document.getElementById("creationContent").value = "Text";
        document.getElementById("creationTags").value = "#Tags";

        PSview = new PostSectionView();

        Cview.closeWindow();
        Cview.closePublishButton();
        PSview.showExitButton();
        PSview.showCreateButton();
    }

    edit(){

        let post = {

            id: "",

            description: "",

            createdAt: new Date(),

            author: "",

            photoLink: "",

            hashTags: [],

            likes: [],

        };

        post.description = document.getElementById("creationContent").value;
        post.hashTags = document.getElementById("creationTags").value.split(" ");

        postsForm.edit(localStorage.getItem("idOfEditPost"), post);

        document.getElementById("creationContent").value = "Text";
        document.getElementById("creationTags").value = "Tags";

        Cview.closeWindow();
        Cview.closeEditButton();
        PSview.showExitButton();
        PSview.showCreateButton();
    }

    close(){
        Cview.closeWindow();
        Cview.closeEditButton();
        Cview.closePublishButton();
        PSview.showExitButton();
        PSview.showCreateButton();
    }
}