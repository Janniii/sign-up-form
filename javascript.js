


const btn = document.querySelector("button");
const inputs = document.querySelectorAll("input");
const body = document.querySelector("body");
const container = document.querySelector(".container")


let itemList = []


btn.addEventListener("click", () => {
    console.log("hello");

        inputs.forEach(input  => {

            if (input.type != "radio" && input.type != "checkbox") {
                console.log(input.value)
                if (input.value != "") {
                    itemList.push(input.value);
                }
            }
            
            
            
            else if (input.checked) {
                console.log(input.value, input.checked)
                if (input.value != "") {
                    itemList.push(input.value);
                }
            }

        })

    createWindow();
    });



const modal = document.querySelector(".modal");
const modalBack = document.querySelector(".modal-background")




modalBack.addEventListener("click", (event) => {
    if (event.target == modalBack || event.target == closebtn) {
        modal.style.display = "none";
        modalBack.style.display = "none";
        itemList = [];

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



function createWindow() {

    modal.style.display = "block";
    modalBack.style.display = "block";
    

    
    /* const windowyo = document.createElement("div");
    windowyo.setAttribute("style", "z-index: 1; display: block; width: 400px; height: 600px; background-color: red; position: absolute; left: calc(1920px - 60%); top: calc(860px - 80%); display: flex; align-self: center;")
    body.appendChild(windowyo); */

    for (let i = 0; i < itemList.length; i++) {
        const newP = document.createElement("p");
        newP.textContent = itemList[i];
        newP.classList.add("temporary");
        modalContainer.appendChild(newP);

    }

}

