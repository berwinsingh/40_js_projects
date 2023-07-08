const header = document.querySelector("header");
const navigation = document.querySelectorAll(".menu");
const menuItems = document.querySelector("ul")
const year = document.querySelector(".year");

//Describing all sections for easier scrolling position extraction
const home = document.getElementById("home");
const about = document.getElementById("about");
const services = document.getElementById("services");
const tours = document.getElementById("Tours");

function scrollSection(item){ //Dynamically taking the value of the item passed and scrolling across the y axis accordingly
    scrollTo({
        top: item.offsetTop - 100,
        behavior: "smooth",
    });
}

navigation.forEach(item => {
    let type = item.textContent;

    switch (type) {
        case "Home":
            item.addEventListener("click", ()=>{
                scrollSection(home);
            });
            break;

        case "About":
            item.addEventListener("click", ()=>{
                scrollSection(about);
            });
            break;

        case "Services":
            item.addEventListener("click",()=>{
                scrollSection(services);
            });
            break;

        case "Tours":
            item.addEventListener("click",()=>{
                scrollSection(tours);
            });
            break;

        default:
            alert("Oops, Something went wrong. Please try again!")
            break;
    }
});

//Adding the scroll event to get a new header when scrolled beyond the hero section
document.addEventListener("scroll", ()=>{
    if(window.scrollY===0){
        header.style.backgroundColor = "transparent";
        menuItems.style.color = "white";
    }
    else {
        header.style.position = "fixed";
        header.style.backgroundColor = "white";
        header.style.borderRadius = "50px";
        menuItems.style.color = "black"
    }
});

//Adding Footer dynamic year funtionality
const currentYear = new Date().getFullYear(); //Creates a new current year date and then extracts the year to fit in the footer

year.textContent = currentYear; 