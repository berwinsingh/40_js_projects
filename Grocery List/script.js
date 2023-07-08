const clearAll = document.querySelector("h2");
const addToList = document.querySelector("#add");
const groceryItem = document.getElementById("grocery-item"); //Input element
const groceryList = document.querySelector(".grocery-list"); //Div element under which all items will be added

const editPopUp = document.querySelector(".edit-value");
const editInput = document.getElementById("edit-text");
const editBtn = document.getElementById("edit-btn");


//Selecting the template element and making a copy
addToList.addEventListener("click",()=>{
    const groceryName = groceryItem.value;
    
    if(groceryName===""){
        alert("What would you like to add?")
    }
    else{
        const template = document.querySelector("template");
        const cloneItem = template.content.cloneNode(true);
        const groceryThing = cloneItem.querySelector(".grocery-item");
        // groceryThing.setAttribute("data-grocery", groceryName);
        groceryThing.querySelector("p").textContent = groceryName;
        
        groceryList.appendChild(cloneItem);
        groceryItem.value = "";
        clearAll.style.display = "flex";
    }
});

groceryList.addEventListener("click", (e) => {
    if (e.target.id === "trash") {
      const itemToRemove = e.target.closest(".grocery-item");
      groceryList.removeChild(itemToRemove);

    } 
    else if (e.target.id === "edit") {
        const itemEdit = e.target.closest(".grocery-item");
        editPopUp.classList.remove("display");
        const editVal = editInput.value = itemEdit.querySelector("p").textContent;

        editBtn.addEventListener("click",()=>{
            const editedVal = editInput.value;
            itemEdit.querySelector("p").textContent = editedVal;
            editPopUp.classList.add("display");
        })        
    }
  });

//Removing all the elements from the list with the Clear All button
clearAll.addEventListener("click",()=>{
    while(groceryList.hasChildNodes()){
        groceryList.removeChild(groceryList.firstChild);
    }
    clearAll.style.display = "none";
});