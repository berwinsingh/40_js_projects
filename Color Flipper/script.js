const body = document.querySelector("body");
const colorName = document.getElementById("color");
const randColor = document.getElementById("color-change");

const hexcode = ()=>{ //Creates and returns a random hexcode
    let hex = "#";
    for (let i=0;i<6;i++){
        hex += Math.floor(Math.random()*15).toString(16);
    }
    colorName.textContent = hex;
    body.style.backgroundColor = hex;
};

randColor.addEventListener("click",hexcode); //Making sure we get a random color when clicked on the button