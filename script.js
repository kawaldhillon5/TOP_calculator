const content = document.querySelector(".content");
const result = document.querySelector(".result")
const buttons = document.querySelector(".lower_buttons")
const clear = document.querySelector(".clear");
const del = document.querySelector(".delete");
let button_names = [['1','4','7','.'],['2','5','8','0'],['3','6','9','='],['+','-','×','÷']];
let button_values = [["1","4","7","."],["2","5","8","0"],["3","6","9",'='],['+','-','*','/']]; 

calculate();

function calculate(){
    create_buttons();
    clear.addEventListener("click", () => {
        content.textContent = "";
        result.textContent = "";
        first_num = 0, second_num = 0, operator = "";
        computed_num = 0;
        to_be_first = "", to_be_second  = "", to_be_processed = "",arr_for_processing = [];
        console.log('clear');
    });
    del.addEventListener("click", (e) => {
        let val = e.target.value;
        process(val);
    });
    let first_num = 0, second_num = 0, operator = "";
    let computed_num = 0;
    let to_be_first = "", to_be_second  = "", to_be_processed = "",arr_for_processing = [];
    content.textContent = "";

    function process_arr(arr){
        arr.push("=");
        arr.forEach(val => {
            if(val >= "0" && val <="9"){
                if(first_num == 0){
                    to_be_first += val;
                    console.log("toBeP for first = ",to_be_first)
                } else {
                    to_be_second += val;
                    console.log("toBeP for second = ",to_be_second)
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
                } else {
                operator = val;
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
        });
    }
    function process(val) {
        if(val == "del"){
            to_be_processed = to_be_processed.slice(0,to_be_processed.length-1);
            content.textContent = to_be_processed;
            result.textContent = "";
        } else if(val == "+" || val == "-" || val == "*" || val == "/" || val == "."){
                if(to_be_processed.includes(val,to_be_processed.length-1)|| to_be_processed == ""){
                } else {
                    to_be_processed += val;
                    content.textContent = to_be_processed;
                }
        } else if(val == "="){
            process_arr(arr_for_processing = Array.from(to_be_processed));
            console.log(arr_for_processing);
        } 
         else {
            to_be_processed += val;
            content.textContent = to_be_processed;
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
        console.log("comp ", to_be_first, " ", to_be_second);
        return computed;
    }

}



