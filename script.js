"use strict";
let signupBtn = document.getElementById("signupBtn");
let signinBtn = document.getElementById("signinBtn");
let nameItem = document.getElementById("nameItem");
let title = document.getElementById("title");

signinBtn.onclick = function(){
    nameItem.style.maxHeight = '0';
    title.innerHTML = "Sign In";
    signupBtn.classList.add("disable");
    signinBtn.classList.remove("disable")
}
signupBtn.onclick = function(){
    nameItem.style.maxHeight = '60px';
    title.innerHTML = "Sign Up";
    signupBtn.classList.remove("disable");
    signinBtn.classList.add("disable");
}
