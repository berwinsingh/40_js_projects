const h2 = document.querySelector("h2");
const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
const increase = document.getElementById("increase");

let sum = 0;

increase.addEventListener("click",()=>{
    sum += 1;
    h2.textContent = sum;

    if(sum>0){
        h2.style.color = "green";
    }
});

decrease.addEventListener("click",()=>{
    sum -= 1;
    h2.textContent = sum;
});

reset.addEventListener("click", ()=>{
    sum = 0;
    h2.textContent = sum;
    h2.style.color = "red";
});