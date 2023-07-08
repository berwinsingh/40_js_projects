const hamburger = document.getElementById("hamburger");
const menuElements = document.querySelector(".menu-elements");
const li = document.querySelectorAll("li");
const exit = document.getElementById("exit");

hamburger.addEventListener("click",() => {
    if(window.innerWidth<600){
        li.forEach(element => {
            element.style.display = "flex";
        });
        menuElements.style.display = "flex";
        hamburger.style.display = "none";
    }
});

exit.addEventListener("click",()=>{
    hamburger.style.display = "flex";
    li.forEach(element => {
        element.style.display = "none";
    });
});