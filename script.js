const calc = document.querySelector(".main");
const content = document.querySelector(".content");
const result = document.querySelector(".result")
const buttons = document.querySelector(".lower_buttons")
let button_names = [['1','4','7','.'],['2','5','8','0'],['3','6','9','='],['+','-','×','÷']];
let button_values = [[1,4,7,"."],[2,5,8,0],[3,6,9,'='],['+','-','*','/']]; 
let first_num = 0, second_num = 0, operator = "";
    let computed_num = 0;


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
            button.textContent = button_names[i][j];
            button.value = button_values[i][j];
            coloums.appendChild(button);
            button.addEventListener("click",(e) =>{
                 let val = e.target.value;
                 compute(val);
                 console.log(val);
            });
        }
    }
}

function compute(val) {
    
    if(val >= 1 && val <=9){
        if(first_num == 0){
            first_num = Number(val);
        } else {
            second_num = Number(val);
        }
    } else if(val == "+" || val == "-" || val == "*" || val == "/"){
        operator = val;
    } else if(val == "="){
        switch (operator){
            case "+": computed_num = first_num + second_num;
                break;
            case "-": computed_num = first_num - second_num;
                break;
            case "*": computed_num = first_num * second_num;
                break;
            case "/": computed_num = first_num / second_num;
                break;
        }
        console.log("first = ",first_num," ","second = ",second_num," ",operator)
        console.log(computed_num);
        result.textContent = computed_num;
        first_num = 0, second_num = 0, operator = "";
        return computed_num;
    }
    content.textContent = `${first_num} ${operator} ${second_num}`; 

}
