//Selecting individual buttons
const history = document.getElementById("history");
const vision = document.getElementById("vision");
const goals = document.getElementById("goals");

//Selecting individual sections
const astonHistory = document.getElementById("aston-history");
const astonVision = document.getElementById("aston-vision");
const astonGoals = document.getElementById("aston-goals");

function toggleClass(button,data){
    button.classList.toggle("active");
    data.classList.toggle("display");
}

history.addEventListener("click",()=>{
    toggleClass(history, astonHistory);

    vision.classList.remove("active");
    goals.classList.remove("active");
    astonVision.classList.add("display");
    astonGoals.classList.add("display")
})

goals.addEventListener("click",()=>{
    toggleClass(goals, astonGoals);

    history.classList.remove("active");
    vision.classList.remove("active");
    astonHistory.classList.add("display");
    astonVision.classList.add("display");
});

vision.addEventListener("click",()=>{
    toggleClass(vision, astonVision);

    history.classList.remove("active");
    goals.classList.remove("active");
    astonHistory.classList.add("display");
    astonGoals.classList.add("display");
});