const mainContainer = document.querySelector(".main-container");
const container = document.querySelector(".container");
const modal = document.querySelector(".container");
const openButton = document.getElementById("open-modal");
const popUp = document.querySelector(".pop-up");
const close = document.getElementById("close");

openButton.addEventListener("click",()=>{
    popUp.classList.toggle("display");
    // mainContainer.classList.add("temp-blur");
});

close.addEventListener("click",()=>{
    popUp.classList.toggle("display");
    // mainContainer.classList.remove("temp-blur");
});