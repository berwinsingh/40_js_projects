const surpriseButton = document.getElementById("surprise-me");
const back = document.getElementById("back");
const next = document.getElementById("next");
const container = document.querySelector(".container");

let usrName = document.querySelector("h2");
let role = document.querySelector(".role");
let description = document.querySelector(".description");
let profile = document.querySelector(".profile");
let currentPosition = 0;

const berwin = reviewer("Berwin Singh", "Web Developer", "Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod badiya incididunt ut labore et dolore magna aliqua.","./Images/Profile.jpg");
const joe = reviewer("Joe Flash","Business Development Manager", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","./Images/albert-dera-ILip77SbmOE-unsplash.jpg");
const anna = reviewer("Anna Parker", "Marketing Manager", "Dolor sit, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","./Images/stefan-stefancik-QXevDflbl8A-unsplash.jpg");
const jack = reviewer("Jack Doe","Senior Web Developer","Dolor sit, consectetur adipiscing, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","./Images/austin-wade-X6Uj51n5CE8-unsplash.jpg");

let reviewData = [berwin, joe, anna, jack];

function reviewer(name, position, review, profile){ //Creating new reviewer Data Object
    return {name,position,review, profile}
}

surpriseButton.addEventListener("click", () => {
    let randomSelect = reviewData[Math.floor(Math.random()*reviewData.length)]; //Selecting a random value from array
    usrName.textContent = randomSelect.name;
    role.textContent = randomSelect.position;
    description.textContent = randomSelect.review;
    profile.style.backgroundImage = `url(${randomSelect.profile})`;
});

next.addEventListener("click",()=>{ //Finding current index value for the current random element inside of the array
    
    if(currentPosition<reviewData.length-1){
        currentPosition+=1;
    }
    else{
        currentPosition=0;
    }

    usrName.textContent = reviewData[currentPosition].name;
    role.textContent = reviewData[currentPosition].position;
    description.textContent = reviewData[currentPosition].review;
    profile.style.backgroundImage = `url(${reviewData[currentPosition].profile})`;
});

back.addEventListener("click",()=>{
    if(currentPosition === 0){
        currentPosition = reviewData.length - 1;
    }
    else if(currentPosition<reviewData.length){
        currentPosition -=1;
    }

    usrName.textContent = reviewData[currentPosition].name;
    role.textContent = reviewData[currentPosition].position;
    description.textContent = reviewData[currentPosition].review;
    profile.style.backgroundImage = `url(${reviewData[currentPosition].profile})`;
});