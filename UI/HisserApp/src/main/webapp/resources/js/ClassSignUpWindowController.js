"use strict";

class SignUpWindowController {

    constructor() {

        document.getElementById("closeSignUpButton").addEventListener("click", this.close);
        document.getElementById("signUpWindowButton").addEventListener("click", this.signUp);
    }

    signUp(){

        document.getElementsByClassName("signUpWindow").item(0).style.visibility = "hidden";
        document.getElementsByTagName("main").item(0).style.opacity = 1;

        let user = document.getElementsByTagName("header").item(0).getElementsByClassName("user").item(0);
        user.style.visibility = "visible";
        user.getElementsByTagName("p1").item(0).textContent = document.getElementById("signUpLogin").value;

        let userFilling={

            name: "",

            photoLink: "resources/Images/PostFilling/GreyWarden.jpg",

        };

        userFilling.name = document.getElementById("signUpLogin").value;
        localStorage.setItem("userFilling", JSON.stringify(userFilling));
    }

    close(){

        document.getElementsByClassName("signUpWindow").item(0).style.visibility = "hidden";
        document.getElementsByTagName("main").item(0).style.opacity = 1;
        document.getElementById("signUpHeaderButton").style.visibility = "visible";
    }
}