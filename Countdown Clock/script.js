const days = document.getElementById("days");
const hours = document.getElementById("hours");
const mins = document.getElementById("mins");
const seconds = document.getElementById("secs");

const targetDate = new Date("July 8, 2023 23:59:59"); //Declaring when I want the countdown to be over

//Creating a function that automatically updated the elements values
function dateUpdation(item, toUpdate){
    item.querySelector("h3").textContent = toUpdate;
}

setInterval(()=>{
    const currentDate = new Date().getDate();
    const remainingDate = targetDate.getDate() - currentDate;
    dateUpdation(days, remainingDate);
},500);

setInterval(()=>{
    const currentHours = new Date().getHours();
    const remainingHours = targetDate.getHours() - currentHours;
    dateUpdation(hours, remainingHours)
},500);
setInterval(()=>{
    const currentMins = new Date().getMinutes();
    const remainingMins = targetDate.getMinutes() - currentMins;
    dateUpdation(mins, remainingMins)
},100);
setInterval(()=>{
    const currentSecs = new Date().getSeconds();
    const remainingSecs = targetDate.getSeconds() - currentSecs;
    dateUpdation(seconds, remainingSecs)
},1);