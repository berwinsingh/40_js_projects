const hamburger = document.getElementById("hamburger");
const navbar = document.querySelector(".menu-elements");
const menuBar = document.querySelector(".menu-bar");
const close = document.getElementById("close");

hamburger.addEventListener("click",()=>{
    view();
});

close.addEventListener("click",()=>{
    // console.log("Hello");
    view();
});

function view(){
    navbar.classList.toggle("display");
    close.classList.toggle("display");
    menuBar.classList.toggle("bg");
}