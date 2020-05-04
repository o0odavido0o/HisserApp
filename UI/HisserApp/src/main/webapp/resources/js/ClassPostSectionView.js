"use strict";

class PostSectionView {

    static refresh(){

        if(localStorage.getItem("userFilling") != null){
            PSview.showUser();
            PSview.showExitButton();
            PSview.showCreateButton();
        }else{
            PSview.showSignUpButton();
        }

        if(localStorage.getItem("postFilling")  != null){
            PScontroller.filter();
        }
    }

    update(){
        PScontroller.filter(0, 10 + document.getElementsByClassName("post").length);
    }

    exit(){
        localStorage.removeItem("userFilling");
        PScontroller.filter();
    }

    showUser(){
        let user = JSON.parse(localStorage.getItem("userFilling"));
        document.getElementsByTagName("header").item(0).getElementsByTagName("p1").item(0).textContent = user.name;
        document.getElementsByTagName("header").item(0).getElementsByTagName("img").item(1).src = user.photoLink;
        document.getElementsByTagName("header").item(0).getElementsByClassName("user").item(0).style.visibility = "visible";
        document.getElementById("signUpHeaderButton").style.visibility = "hidden";
    }

    closeUser(){
        document.getElementsByTagName("header").item(0).getElementsByClassName("user").item(0).style.visibility = "hidden";
    }

    showExitButton(){
        document.getElementById("exitHeaderButton").style.visibility = "visible";
    }

    closeExitButton(){
        document.getElementById("exitHeaderButton").style.visibility = "hidden";
    }

    showSignUpButton(){
        document.getElementById("signUpHeaderButton").style.visibility = "visible";
    }

    closeSignUpButton(){
        document.getElementById("signUpHeaderButton").style.visibility = "hidden";
    }

    showCreateButton(){
        document.getElementById("createButton").style.position = "relative";
        document.getElementById("createButton").style.visibility = "visible";
    }

    closeCreateButton(){
        document.getElementById("createButton").style.position = "absolute";
        document.getElementById("createButton").style.visibility = "hidden";
    }
}