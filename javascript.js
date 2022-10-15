


const btn = document.querySelector("button");
const inputs = document.querySelectorAll("input");
const body = document.querySelector("body");
const container = document.querySelector(".container")
const form = document.querySelector("form");

const rightContainer = document.querySelector(".right-container");


let itemList = []
let itemListTwo = []
let itemListThree = []


const fpwd = document.getElementById("pwd");
const spwd = document.getElementById("pwd2");

const btnConfirm= document.querySelector("#confirm");



function getFalse() {
    return false;
}


btn.addEventListener("click", () => {
    form.reportValidity()


    if (form.checkValidity() && fpwd.value != spwd.value) {
        spwd.style.boxShadow = "0 0 4px 2px #DC143C";

    }
    
    else if (form.checkValidity() && fpwd.value == spwd.value) {
        spwd.style.boxShadow = "0 0 4px 2px teal";
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

const goBack = document.querySelector("td:first-child");




modalBack.addEventListener("click", (event) => {
    if (event.target == modalBack || event.target == closebtn || event.target == btnConfirm) {
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
})



modalBackTwo.addEventListener("click", (event) => {
    if (event.target == wow || event.target == goBack) {
        modalBackTwo.style.display = "none";
        wow.style.display = "none";
        pTable.style.display = "none";
    }
})


const closebtn = document.querySelector(".close");

const modalContainer = document.querySelector(".modal-container")

const quickDiv = document.querySelector("#quickDiv");


const modalTwo = document.querySelector(".modal-two");
const btnTable = document.querySelector("#btn-table");

const pTable = document.querySelector("table");

const wow = document.querySelector("#wow");

const nmode = document.querySelector("#btn-nmode");


nmode.addEventListener("click", switchMode);

let nmToggle = 0;


function switchMode() {

    if (nmToggle == 0) {
    rightContainer.style.background = "linear-gradient(180deg, black 90%, teal 120%)";
    nmode.textContent = "Light Mode";
    nmToggle = 1;
    }

    else if (nmToggle == 1) {
        rightContainer.style.background = "linear-gradient(180deg, white 90%, teal 120%)";
        nmode.textContent = "Night Mode";
        nmToggle = 0;
    }

}






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




const radioInputs = document.querySelectorAll("input[type=radio]")
const star = document.querySelector("#fstar");


radioInputs.forEach(input => input.addEventListener("click", getPlanet));

function getPlanet() {

    const element = document.getElementById(this.value);
    star.style.display = "block";
    star.style.position = "absolute;"


    switch (this.value) {



        case "europa":
            star.style.left = "130px"
            star.style.top = "110px"
            star.style.backgroundColor = "rgba(0, 0, 0, 0.3)"
            star.style.boxShadow = "7px 2px 10px 1px white";
            star.style.animation = "star 2s linear infinite";
            break;

        case "io":
            star.style.left = "170px"
            star.style.top = "120px"
            star.style.backgroundColor = "rgba(0, 0, 0, 0.3)"
            star.style.boxShadow = "7px 2px 10px 1px white";
            star.style.animation = "star 2s linear infinite";
            break;

        case "mars":
            star.style.left = "70px"
            star.style.top = "70px"
            star.style.backgroundColor = "rgba(0, 0, 0, 0.3)"
            star.style.boxShadow = "7px 2px 10px 1px white";
            star.style.animation = "star 2s linear infinite";
            break;

        case "mercury":
            star.style.left = "40px"
            star.style.top = "150px"
            star.style.backgroundColor = "rgba(0, 0, 0, 0.3)"
            star.style.boxShadow = "7px 2px 10px 1px white";
            star.style.animation = "star 2s linear infinite";
            break;

        case "moon":
            /* star.style.left = "160px"
            star.style.top = "150px" */
            star.style.left = "100px"
            star.style.top = "100px"
            star.style.backgroundColor = "rgba(0, 0, 0, 0.3)"
            star.style.boxShadow = "7px 2px 1px -1px white";
            star.style.animation = "moon 3.5s linear infinite";
            break;
    
        case "pallas":
            star.style.left = "90px"
            star.style.top = "125px"
            star.style.backgroundColor = "rgba(0, 0, 0, 0.3)"
            star.style.boxShadow = "7px 2px 10px 1px white";
            star.style.animation = "star 2s linear infinite";
            break;
    
        case "venus":
            star.style.left = "82px"
            star.style.top = "67px"
            star.style.backgroundColor = "rgba(0, 0, 0, 0.3)"
            star.style.boxShadow = "7px 2px 10px 1px white";
            star.style.animation = "star 2s linear infinite";
            break;
    
        case "vesta":
            star.style.left = "40px"
            star.style.top = "71px"
            star.style.backgroundColor = "rgba(0, 0, 0, 0.3)"
            star.style.boxShadow = "7px 2px 10px 1px white";
            star.style.animation = "star 2s linear infinite";
            break;

            
        
        
        
    }




}