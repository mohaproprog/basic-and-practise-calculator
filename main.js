const resultInput = document.getElementById("resultInput");
const numbers = document.querySelectorAll(".numbers");
const operators = document.querySelectorAll(".operators");
let reset = document.getElementById("ii");
let valuePlus = "";
let valueMinus = "";
let valueMult ="";
let valueDivision = "";
let value2;

// numbers
numbers.forEach(number=>{
   number.addEventListener("click",()=>{
    if(number.id == "zero"){
        if(resultInput.value === "" || resultInput.value === "0"){
            resultInput.value = "0";

    }
    else{
        resultInput.value += number.textContent;
    }
}
   else if(resultInput.value == "0" ){
    resultInput.value = number.textContent;
   }
   else{
    resultInput.value += number.textContent;
   }

   });
   });

//    operators
operators.forEach(operator=>{
    operator.addEventListener("click",(e)=>{

        // addition code
        if(e.target.id === "plus"){
            
            if (valuePlus === ""){
                valuePlus = resultInput.value;
                resultInput.value = "";

            }
            else if (valuePlus !== ""){
                valuePlus = parseFloat(valuePlus) + parseFloat(resultInput.value);
                resultInput.value = "";

            }
            
        }

        // addition code ended

        // substraction code

        else if(e.target.id === "minus"){
             if (valueMinus === ""){
                valueMinus = resultInput.value;
                resultInput.value = "";

            }
            else if (valueMinus !== ""){
                valueMinus = parseFloat(valueMinus) - parseFloat(resultInput.value);
                resultInput.value = "";

            }
            
        
        }
        //  substraction code ended

        // multiplication code 
        else if(e.target.id === "mult"){
             if (valueMult === ""){
                valueMult = resultInput.value;
                resultInput.value = "";

            }
            else if (valueMult !== ""){
                valueMult = parseFloat(valueMult) + parseFloat(resultInput.value);
                resultInput.value = "";

            }
            
        }
        //  multiplication code ended

        // divivsion code 
        else if(e.target.id === "division"){
             if (valueDivision === ""){
                valueDivision = resultInput.value;
                resultInput.value = "";

            }
            else if (valueDivision !== ""){
                valueDivision = parseFloat(valueDivision) / parseFloat(resultInput.value);
                resultInput.value = "";

            }
            
        }
        // divivsion code ended

        // equal code

        else if(e.target.id === "equal"){
             // addition code
            if (valuePlus !== ""){
                value2 = resultInput.value;
                resultInput.value = parseFloat(valuePlus) + parseFloat(value2);
                valuePlus ="";
            }
             // addition code ended

              //  substraction code 
            else if (valueMinus !== ""){
                value2 = resultInput.value;
                resultInput.value = parseFloat(valueMinus) - parseFloat(value2);
                valueMinus = "";
            }
             //  substraction code ended

              //  multiplication code
            else if (valueMult !== ""){
                value2 = resultInput.value;
                resultInput.value = parseFloat(valueMult) * parseFloat(value2);
                valueMult = "";
            }
             //  multiplication code ended

              // divivsion code 
            else if (valueDivision !== ""){
                value2 = resultInput.value;
                resultInput.value = parseFloat(valueDivision) / parseFloat(value2);
                valueDivision = "";
            }
             // divivsion code ended
        }

    })
})

// reset button
reset.addEventListener("click",()=>{
    resultInput.value = "";

})