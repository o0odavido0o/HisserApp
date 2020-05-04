"use strict";

class SignUpWindowController {

    constructor() {
        document.getElementById("closeSignUpButton").addEventListener("click", this.close);
        document.getElementById("signUpWindowButton").addEventListener("click", this.signUp);
    }

    signUp(){

        let userFilling={

            name: "",

            photoLink: "resources/Images/PostFilling/GreyWarden.jpg",

        };
        userFilling.name = document.getElementById("signUpLogin").value;
        localStorage.setItem("userFilling", JSON.stringify(userFilling));

        document.getElementById("signUpLogin").value = "Login";

        PSview = new PostSectionView();

        SUview.closeWindow();
        PSview.showUser(userFilling);
        PSview.showExitButton();
        PSview.showCreateButton();
        PScontroller.filter();
    }

    close(){
        SUview.closeWindow();
        PSview.showSignUpButton();
    }
}