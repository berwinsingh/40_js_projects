//Dynamically adding the food items using objects
const menu = [
  {
    id: 1,
    title: "Strawberry Pancake",
    category: "Breakfast",
    price: 15.99,
    img: "./images/pexels-ash-376464.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis animi deserunt consequuntur laboriosam impedit culpa. A odit soluta placeat saepe itaque tenetur, rerum maiores sed id neque quaerat ex animi?",
  },
  {
    id: 2,
    title: "Chicken Biryani",
    category: "Lunch",
    price: 13.99,
    img: "./images/pexels-rajesh-tp-1624487.jpg",
    desc: "This is a chicken biryani the best dish that exists in the world!"
  },
  {
    id: 3,
    title: "Donuts",
    category: "Breakfast",
    price: 7.99,
    img: "./images/pexels-tijana-drndarski-3338681.jpg",
    desc: "Pack of 4 delicous donuts with 4 different flavors chocolate, coffee, and strawberry"
  },
  {
    id: 4,
    title: "Monster Milkshake",
    category: "Shakes",
    price: 10.99,
    img: "./images/pexels-anna-tukhfatullina-food-photographerstylist-2638026.jpg",
    desc: "The monster milkshake that contains a little of everything to ensure that you enjoy you meal like you have earned it!"
  },
  {
    id: 5,
    title: "Butter Chicken",
    category: "Dinner",
    price: 12.99,
    img: "./images/pexels-saveurs-secretes-7625056.jpg",
    desc: "The most authentic indian dish. With mouth watering spices"
  }
];

const menuItems = document.querySelector(".menu-items");
const filterOptions = document.querySelectorAll(".filter");
const template = document.querySelector("template");


//Adding all items to the page dynamically
menu.forEach((item)=>{
  food(item);
});

function food(item){
  //Cloning and selecting the template node
  const cloneFood = template.content.cloneNode(true);
  let templateImg = cloneFood.querySelector("img");
  let details = cloneFood.querySelector(".details");
  let heading = details.querySelector("h2");
  let cost = details.querySelector(".cost");
  let description = details.querySelector(".description");
  
  //Populating the cloned template node with the item value
  templateImg.setAttribute("src", `${item.img}`);
  heading.textContent = item.title;
  description.textContent = item.desc;
  cost.textContent = `$${item.price}`;

  menuItems.appendChild(cloneFood)
}

function clear(){
  while(menuItems.hasChildNodes()){
    menuItems.removeChild(menuItems.firstChild);
  }
}

//Creating filteration functions
function breakfast(item){
  if(item.category==="Breakfast"){
    return true;
  }
  return false;
}

function lunch(item){
  if(item.category==="Lunch"){
    return true;
  }
  return false;
}

function shake(item){
  if(item.category==="Shakes"){
    return true;
  }
  return false;
}

function dinner(item){
  if(item.category==="Dinner"){
    return true;
  }
  return false;
}

//Applying filter functionality
filterOptions.forEach(item => {
  let categoryType = item.getAttribute("data-filter-name");

  switch (categoryType) {
    case "All":
      item.addEventListener("click", ()=>{
        clear();
        menu.forEach((item)=>{
          food(item);
      })
      });
      break;
    case "Breakfast":
      item.addEventListener("click", ()=>{
        const breakfastFilter = menu.filter(breakfast);
        clear();
        breakfastFilter.forEach(item => {
          food(item);
        })
      })

      break;

    case "Lunch":
      item.addEventListener("click", ()=>{
        const lunchFilter = menu.filter(lunch);
        clear();
        lunchFilter.forEach(item=> {
          food(item);
        })
      })

    break;

    case "Shakes":
      item.addEventListener("click",()=>{
        const shakeFilter = menu.filter(shake);
        clear();
        shakeFilter.forEach(item=>{
          food(item);
        })
      })
      
      break;

    case "Dinner":
      item.addEventListener("click",()=>{
        const dinnerFilter = menu.filter(dinner);
        clear();
        dinnerFilter.forEach(item =>{
          food(item);
        })
      })
      break;
      
    default:
      break;
  }
});