let number1 =  parseFloat(prompt("Digite um número"));
let number2 =  parseFloat(prompt("Digite um número"));
let number3 =  parseFloat(prompt("Digite um número"));
let number4 =  parseFloat(prompt("Digite um número"));
let number5 =  parseFloat(prompt("Digite um número"));

let numeroMaior = 0;
let numeroMenor = 0;
    
if (number1 > number2){
  numeroMaior = number1
} else {
  numeroMaior = number2
}

if (number3 > numeroMaior){
  numeroMaior = number3
}

if (number4 > numeroMaior){
  numeroMaior = number4
}

if (number5 > numeroMaior){
  numeroMaior = number5
}

if (number1 < number2){
    numeroMenor = number1
  } else {
    numeroMenor = number2
  }
  
  if (number3 < numeroMenor){
    numeroMenor = number3
  }
  
  if (number4 < numeroMenor){
    numeroMenor = number4
  }
  
  if (number5 < numeroMenor){
    numeroMenor = number5
  }
console.log('número maior é: ' + numeroMaior)
console.log('número menor é: ' + numeroMenor)