


const btn = document.querySelector("button");
const inputs = document.querySelectorAll("input");
const body = document.querySelector("body");
const container = document.querySelector(".container")
const form = document.querySelector("form");


let itemList = []
let itemListTwo = []
let itemListThree = []





function getFalse() {
    return false;
}


btn.addEventListener("click", () => {
    form.reportValidity()
    if (form.checkValidity()) {
        inputs.forEach(input  => {

            if (input.type != "radio" && input.type != "checkbox" && input.type != "password") {
                console.log(input.value)
                if (input.value != "") {
                    itemList.push(input.value);
                }
            }
            
            
            
            else if (input.checked) {
                console.log(input.value, input.checked)
                if (input.value != "") {
                    itemListTwo.push(input.value);
                }
            }

        })

    createWindow();
    }});



const modal = document.querySelector(".modal");
const modalBack = document.querySelector(".modal-background")

const modalBackTwo = document.querySelector(".modal-backgroundtwo")




modalBack.addEventListener("click", (event) => {
    if (event.target == modalBack || event.target == closebtn) {
        modal.style.display = "none";
        modalBack.style.display = "none";
        itemList = [];
        itemListTwo = [];
        itemListThree = [];

        const oldP = document.querySelectorAll(".temporary");
        console.log(oldP);
        oldP.forEach(old => old.remove());
        console.log(oldP);
    }
    
    
    /* modal.style.display = "none";
    modalBack.style.display = "none"; */
} )


const closebtn = document.querySelector(".close");

const modalContainer = document.querySelector(".modal-container")

const quickDiv = document.querySelector("#quickDiv");


const modalTwo = document.querySelector(".modal-two");
const btnTable = document.querySelector("#btn-table");

const pTable = document.querySelector("table");

const wow = document.querySelector("#wow");




btnTable.addEventListener("click", createTable);








function createWindow() {
    console.log(itemListTwo.length, itemListTwo);

    modal.style.display = "block";
    modalBack.style.display = "block";

    itemList[0] = itemList[0] + " " + itemList[1]
    itemList.splice(1, 1)
    itemListThree = itemList.concat(itemListTwo)
 

    

    
    /* const windowyo = document.createElement("div");
    windowyo.setAttribute("style", "z-index: 1; display: block; width: 400px; height: 600px; background-color: red; position: absolute; left: calc(1920px - 60%); top: calc(860px - 80%); display: flex; align-self: center;")
    body.appendChild(windowyo); */

    for (let i = 0; i < itemListThree.length; i++) {
        const newP = document.createElement("p");
        newP.textContent = itemListThree[i];
        // newP.classList.add("special");
        newP.classList.add("temporary");
        // modalContainer.appendChild(newP);
        quickDiv.appendChild(newP);

    }

}



function createTable() {


    modalBackTwo.style.display = "block";
    wow.style.display = "flex";
    pTable.style.display = "block";
    // pTable.style.transform = "scale(3.5)";
    /* modalTwo.style.display = "block";
    modalBack.style.display = "block"; */

}

