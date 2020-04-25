"use strict";

class PostSectionController {

    _
    constructor() {

        document.getElementById("signUpHeaderButton").addEventListener("click", this.signUp);
    }

    signUp(){

        document.getElementsByClassName("signUpWindow").item(0).style.visibility = "visible";
        document.getElementsByTagName("main").item(0).style.opacity = 0.5;
        document.getElementById("signUpHeaderButton").style.visibility = "hidden";
    }

}