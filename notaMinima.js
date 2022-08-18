const prompt = require("prompt-sync")();


let operacao = null
let registros = 0
  while (operacao != "n"){
  console.log("------------------------------------------------------------------")
  console.log("                    Soft's School:                                 ")
  console.log("------------------------------------------------------------------")
  console.log("")
  
    
    operacao = prompt("Entrar no sistema? s ou n : " );
    
    if (operacao == "n"){
      console.log("Obrigado por participar!")
      break
      }

numero1 = parseInt(prompt("Digite a primeira nota: "))
numero2 = parseInt(prompt("Digite a segunda nota : "))


media = (numero1 + numero2) / 2
if(media < 7){
  provaRecuperacao = 7 - media;
  if(provaRecuperacao == 1){ 
  console.log("------------------------------------------------------------------")
  console.log("Você precisa de "+provaRecuperacao+" ponto na próxima prova")
  console.log("------------------------------------------------------------------")
  }
  else{
    console.log("------------------------------------------------------------------")
    console.log("Você precisa de "+provaRecuperacao+" pontos na próxima prova")
    console.log("------------------------------------------------------------------")
  }
}
else{
  console.log("Aluno aprovado")
}
}

