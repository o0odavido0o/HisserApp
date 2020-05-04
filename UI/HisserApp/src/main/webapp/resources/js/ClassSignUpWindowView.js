"use strict";

class SignUpWindowView {

    /*signUp(){

        document.getElementsByClassName("signUpWindow").item(0).style.visibility = "hidden";
        document.getElementsByTagName("main").item(0).style.opacity = 1;

        let userFilling={

            name: "",

            photoLink: "resources/Images/PostFilling/GreyWarden.jpg",

        };
        userFilling.name = document.getElementById("signUpLogin").value;

        document.getElementById("signUpLogin").value = "Login";

        postSectionView = new PostSectionView(userFilling, postFilling);
        localStorage.setItem("userFilling", JSON.stringify(userFilling));

        postSectionView.showUser(userFilling);
        postSectionView.showCreateButton();
        postSectionView.showLikesAndPostButtons(userFilling.name);
    }*/

    showWindow(){
        document.getElementsByClassName("signUpWindow").item(0).style.visibility = "visible";
        document.getElementsByTagName("main").item(0).style.opacity = 0.5;
    }

    closeWindow(){
        document.getElementsByClassName("signUpWindow").item(0).style.visibility = "hidden";
        document.getElementsByTagName("main").item(0).style.opacity = 1;
    }
}