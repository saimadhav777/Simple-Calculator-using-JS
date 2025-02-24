
//method to evaluate the string expression into an output number. 
let strToEval = (str) => {
    let currNum = 0;
    let lastNum = 0;
    let lastOp = '+';
    let res = 0;
    let len = str.length;

    for(let i=0;i<len;i++){

       let c = str.charAt(i);

        if(isDigit(c)){
            currNum = currNum * 10 + Number(c);
        }

        if(!isDigit(c) || i === len - 1){

            if(lastOp === '+'){
                res+=lastNum;
                lastNum = currNum;
            }
            else if(lastOp === '-'){
                res += lastNum;
                lastNum = - currNum;
            }
            else if(lastOp === '*'){
                lastNum *= currNum;
            }
            else if(lastOp === '/'){
                lastNum /= currNum;
            }
            else if(lastOp === '%'){
                lastNum %= currNum;
            }

            lastOp = c;
            currNum = 0;
        }
    }
    res += lastNum;
    return res;
}

//method to check whether the character is a valid digit.
let isDigit = function isDigit(char) {
  return char >= "0" && char <= "9";
}

//function to take the expression from input field and evaluate
let evaluateOuput = () => {
    let inpField = document.querySelector("input");
    let inp = inpField.value;
    try{
        let output = strToEval(inp);
        inpField.value = output;
    } catch(error){
       inpField.value = output;
    }
}

//button to diplay the output
document.querySelector("#equalTo").addEventListener("click",evaluateOuput);


//Action for AC button --> To clear everything in input field
document.querySelector("#clear").addEventListener("click", ()=>{
    document.querySelector("input").value = '0';
});


//for number 1 button
document.querySelector("#number1").addEventListener("click", ()=>{
    if (document.querySelector("input").value !== "0") {
      document.querySelector("input").value += "1";
    } else {
      document.querySelector("input").value = "1";
    }
});


//for number 2 button
document.querySelector("#number2").addEventListener("click", ()=>{
 if(document.querySelector("input").value !== '0'){
    document.querySelector("input").value += '2';
    }
 else{
    document.querySelector("input").value = "2";
 }   
});

//for number 3 button
document.querySelector("#number3").addEventListener("click", ()=>{
 if(document.querySelector("input").value !== '0'){
    document.querySelector("input").value += '3';
    }
 else{
    document.querySelector("input").value = "3";
 }   
});

//for number 4 button
document.querySelector("#number4").addEventListener("click", ()=>{
 if(document.querySelector("input").value !== '0'){
    document.querySelector("input").value += '4';
    }
 else{
    document.querySelector("input").value = "4";
 }   
});

//for number 5 button
document.querySelector("#number5").addEventListener("click", ()=>{
 if(document.querySelector("input").value !== '0'){
    document.querySelector("input").value += '5';
    }
 else{
    document.querySelector("input").value = "5";
 }   
});

//for number 6 button
document.querySelector("#number6").addEventListener("click", ()=>{
 if(document.querySelector("input").value !== '0'){
    document.querySelector("input").value += '6';
    }
 else{
    document.querySelector("input").value = "6";
 }   
});

//for number 7 button
document.querySelector("#number7").addEventListener("click", ()=>{
 if(document.querySelector("input").value !== '0'){
    document.querySelector("input").value += '7';
    }
 else{
    document.querySelector("input").value = "7";
 }   
});

//for number 8 button
document.querySelector("#number8").addEventListener("click", ()=>{
 if(document.querySelector("input").value !== '0'){
    document.querySelector("input").value += '8';
    }
 else{
    document.querySelector("input").value = "8";
 }   
});

//for number 9 button
document.querySelector("#number9").addEventListener("click", ()=>{
 if(document.querySelector("input").value !== '0'){
    document.querySelector("input").value += '9';
    }
 else{
    document.querySelector("input").value = "9";
 }   
});

//for number 0 button
document.querySelector("#number0").addEventListener("click", ()=>{
 if(document.querySelector("input").value !== '0'){
    document.querySelector("input").value += '0';
    }
 else{
    document.querySelector("input").value = "0";
 }   
});

//for number 00 button
document.querySelector("#number00").addEventListener("click", ()=>{
 if(document.querySelector("input").value !== '0'){
    document.querySelector("input").value += '00';
    }
 else{
    document.querySelector("input").value = "00";
 }   
});

//for number + button
document.querySelector("#addition").addEventListener("click", ()=>{
    document.querySelector("input").value += '+';   
});

//for number - button
document.querySelector("#sub").addEventListener("click", ()=>{
    document.querySelector("input").value += '-';   
});

//for number * button
document.querySelector("#multiplication").addEventListener("click", ()=>{
    document.querySelector("input").value += '*';   
});

//for number / button
document.querySelector("#division").addEventListener("click", ()=>{
    document.querySelector("input").value += '/';   
});

//for number . button
document.querySelector("#dot").addEventListener("click", ()=>{
    document.querySelector("input").value += '.';   
});

//for number % button
document.querySelector("#percent").addEventListener("click", ()=>{
    document.querySelector("input").value += '%';   
});

