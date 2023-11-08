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