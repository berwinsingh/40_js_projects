const questionCard = document.querySelectorAll(".question-card");
const tempData = document.querySelectorAll(".temp-data");
const expand = document.querySelectorAll(".btn");

expand.forEach((item,index) =>{
    item.addEventListener("click",()=>{
        let name = item.getAttribute("name");
        if(name === "add-circle-outline"){
            item.setAttribute("name", "remove-circle-outline");
            questionCard[index].classList.add("expand");
            tempData[index].classList.remove("display");
        }
        else{
            item.setAttribute("name", "add-circle-outline");
            questionCard[index].classList.remove("expand");
            tempData[index].classList.add("display");
        }
    })
});