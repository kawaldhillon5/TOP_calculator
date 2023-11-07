const calc = document.querySelector(".main");
const screen = document.querySelector(".screen");
const buttons = document.querySelector(".buttons")
create_buttons();

function create_buttons(){
    let a  = 4;
    for(let i = 1;i<=a;i++){
        const coloums = document.createElement("div");
        coloums.classList.add("coloum",i);
        buttons.appendChild(coloums);
        for(let j = 1;j<=a;j++){
            const button = document.createElement("div");
            button.classList.add("button",i+"*"+j);
            coloums.appendChild(button);
        }
    }
}