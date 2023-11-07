const calc = document.querySelector(".main");
const display = document.querySelector(".display");
const buttons = document.querySelector(".lower_buttons")
let button_values = [['1','4','7','.'],['2','5','8','0'],['3','6','9','='],['+','-','×','÷']]; 
create_buttons();

function create_buttons(){
    let a  = 4;
    for(let i = 0;i<a;i++){
        const coloums = document.createElement("div");
        coloums.classList.add("coloum",i);
        buttons.appendChild(coloums);
        for(let j = 0;j<a;j++){
            const button = document.createElement("button");
            button.classList.add("button",i+"*"+j);
            button.textContent = button_values[i][j];
            console.log(i+j);
            coloums.appendChild(button);
        }
    }
}