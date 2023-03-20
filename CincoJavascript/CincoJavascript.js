// 3 Alunos e quatro notas
// imprimir o nome acompanhado da média
// imprimir o nome do aluno com maior média
// imprimir o nome do aluno com a menor

let aluno1 = '';
let aluno2 = '';
let aluno3 = '';
let nota1 = 0;
let nota2 = 0;
let nota3 = 0;
let nota4 = 0;
let notaAluno1 = 0;
let notaAluno2 = 0;
let notaAluno3 = 0;
let notaMaior = 0;
let notaMenor = 0;

  // Pede os dados Aluno 1
  aluno1 = prompt('Qual seu nome?');
  nota1 = parseFloat(prompt('Digite sua 1° nota: '));
  nota2 = parseFloat(prompt('Digite sua 2° nota: '));
  nota3 = parseFloat(prompt('Digite sua 3° nota: '));
  nota4 = parseFloat(prompt('Digite sua 4° nota: '));
  
  // Calcula a média
  notaAluno1 = (nota1 + nota2 + nota3 + nota4) / 4;

  // Imnprime valores resultantes
  console.log("Aluno(a): "+aluno1 );
  console.log("Sua média: " +notaAluno1);   

  // Pede os dados Aluno 2
  aluno2 = prompt('Qual seu nome?');
  nota1 = parseFloat(prompt('Digite sua 1° nota: '));
  nota2 = parseFloat(prompt('Digite sua 2° nota: '));
  nota3 = parseFloat(prompt('Digite sua 3° nota: '));
  nota4 = parseFloat(prompt('Digite sua 4° nota: '));
  
  // Calcula a média
  notaAluno2 = (nota1 + nota2 + nota3 + nota4) / 4;

  // Imnprime valores resultantes
  console.log("Aluno(a): "+aluno2 );
  console.log("Sua média: " +notaAluno2)   
    
 // Pede os dados Aluno 3
 aluno3 = prompt('Qual seu nome?');
 nota1 = parseFloat(prompt('Digite sua 1° nota: '));
 nota2 = parseFloat(prompt('Digite sua 2° nota: '));
 nota3 = parseFloat(prompt('Digite sua 3° nota: '));
 nota4 = parseFloat(prompt('Digite sua 4° nota: '));
 
 // Calcula a média
 notaAluno3 = (nota1 + nota2 + nota3 + nota4) / 4;


// Imnprime valores resultantes
console.log("Aluno(a): "+aluno3 );
console.log("Sua média: " +notaAluno3)  
 
if (aluno1 > aluno2){
    notaMaior = aluno1
  } else {
    notaMaior = aluno2
  }
  
  if (aluno3 > notaMaior){
    notaMaior = aluno3
  }
  
  if (aluno1 < aluno2){
      notaMenor = aluno1
    } else {
      notaMenor = aluno2
    }
    
    if (aluno3 < notaMenor){
      notaMenor = aluno3
    }
    console.log('A média maior é do Aluno: ' +notaMaior)
    console.log('A média menor é do Aluno: ' +notaMenor)
       
