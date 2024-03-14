let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){
            
            string = evalScientific(string);
            input.value = string;
        }

        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        else if(e.target.innerHTML == 'x^y'){
            
            let userInput = prompt("Enter the expression in the format 'x^y':");
            if (userInput !== null && userInput !== "") {
                string += userInput;
                input.value = string;
            }
        }
        else if(e.target.innerHTML == '√'){
         
            let userInput = prompt("Enter the number for square root:");
            if (userInput !== null && userInput !== "") {
                string += `Math.sqrt(${userInput})`;
                input.value = string;
            }
        }
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
        
    })
})


function evalScientific(str) {
   
    str = str.replace(/sin\(([^)]+)\)/g, (_, match) => Math.sin(parseFloat(match)));
    str = str.replace(/cos\(([^)]+)\)/g, (_, match) => Math.cos(parseFloat(match)));
    str = str.replace(/tan\(([^)]+)\)/g, (_, match) => Math.tan(parseFloat(match)));
    str = str.replace(/log\(([^)]+)\)/g, (_, match) => Math.log10(parseFloat(match)));
    str = str.replace(/\^/g, '**'); 
    
    
    return eval(str);
}




  