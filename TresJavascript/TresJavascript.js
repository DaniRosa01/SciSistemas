function InsertContent(content){
  let conteudo = document.getElementById("conteudo").innerHTML;
    document.getElementById("conteudo").innerHTML = conteudo+"<pr>"+content+"</pr><br>";
  };
  function main(){
    let nome = "";
    let nota1 = 0.00;
    let nota2 = 0.00;
    let nota3 = 0.00;
    let nota4 = 0.00;
    let nota = 0.00;
    let Continuar = "";
  
    // Inicia o laço de repetição
    do{ // Permanece enquanto a letiável for verdadeira
      // Pede os dados
      nome = prompt("Qual seu nome?", "");
      InsertContent("Aluno(a): "+nome);
  
      nota1 = parseFloat(prompt("Digite sua 1° nota: "));
      nota2 = parseFloat(prompt("Digite sua 2° nota: "));
      nota3 = parseFloat(prompt("Digite sua 3° nota: "));
      nota4 = parseFloat(prompt("Digite sua 4° nota: "));
      
      // Calcula a média
      nota = ((nota1 + nota2 + nota3 + nota4) / 4);
  
      // Imnprime valores resultantes
      InsertContent("Sua média: " +nota)
        
      if (nota >= 6 ) {   
        InsertContent("Você foi Aprovado!!")
        }else if(nota < 6){
          InsertContent("Infelizmente você foi reprovado!")
      }
  
      // Pergunta por permanência
      Continuar = prompt("Deseja continuar digita S?");
    }while (Continuar == "S");
  
    InsertContent("Fim!")
  }