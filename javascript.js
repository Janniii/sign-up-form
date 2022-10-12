


const btn = document.querySelector("button");
const inputs = document.querySelectorAll("input");
const body = document.querySelector("body");
const container = document.querySelector(".container")



btn.addEventListener("click", () => {
    console.log("hello");

        inputs.forEach(input  => {

            console.log(input.checked);


            if (input.type != "radio" && input.type != "checkbox") {
                console.log(input.value)
            }
            
            
            
            else if (input.checked) {
                console.log(input.value, input.checked)
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
    }
    
    
    /* modal.style.display = "none";
    modalBack.style.display = "none"; */
} )


const closebtn = document.querySelector(".close");



function createWindow() {

    modal.style.display = "block";
    modalBack.style.display = "block";
    

    
    /* const windowyo = document.createElement("div");
    windowyo.setAttribute("style", "z-index: 1; display: block; width: 400px; height: 600px; background-color: red; position: absolute; left: calc(1920px - 60%); top: calc(860px - 80%); display: flex; align-self: center;")
    body.appendChild(windowyo); */



}

