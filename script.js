const calc = document.querySelector(".main");
const content = document.querySelector(".content");
const result = document.querySelector(".result")
const buttons = document.querySelector(".lower_buttons")
let button_names = [['1','4','7','.'],['2','5','8','0'],['3','6','9','='],['+','-','×','÷']];
let button_values = [["1","4","7","."],["2","5","8","0"],["3","6","9",'='],['+','-','*','/']]; 

calculate();

function calculate(){
    create_buttons();
    let first_num = 0, second_num = 0, operator = "";
    let computed_num = 0;
    let to_be_first = "", to_be_second  = "";
    content.textContent = "";
    function process(val) {
    
        if(val >= "0" && val <="9"){
            if(first_num == 0){
                to_be_first += val;
                console.log("toBeP for first = ",to_be_first)
                content.textContent += val;
            } else {
                to_be_second += val;
                console.log("toBeP for second = ",to_be_second)
                content.textContent += val;
            }
        } else if(val == "+" || val == "-" || val == "*" || val == "/"){
            if(to_be_first != ""){
            if(to_be_first.length != 0 && to_be_second.length != 0){
                console.log("it work");
                second_num = Number(to_be_second);
                to_be_second = "";
                console.log(first_num, second_num , operator)
                first_num = comp(first_num,second_num,operator);
                operator = val;
                content.textContent += " "+operator+" ";
            } else {
            operator = val;
            content.textContent += " "+operator+" ";
            first_num = Number(to_be_first);
             }
            }
        } else if(val == "="){
            second_num = Number(to_be_second);
            to_be_second = "";
            to_be_first = "";
            computed_num = comp(first_num,second_num,operator);
            console.log("first = ",first_num," ","second = ",second_num," ",operator)
            console.log(computed_num);
            result.textContent = computed_num;
            first_num = 0, second_num = 0, operator = "";
            return computed_num;
        }    
    }
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
                     process(val);
                     console.log(val);
                });
            }
        }
    }
    
    function comp(a,b,c){
        let computed = 0;
        switch (c){
            case "+": computed = a + b;
                break;
            case "-": computed = a - b;
                break;
            case "*": computed = a * b;
                break;
            case "/": computed = a / b;
                break;
        }
        return computed;
    }
}



