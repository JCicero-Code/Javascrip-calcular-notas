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
numero3 = parseInt(prompt("Digite a terceira nota : "))

media = (numero1 + numero2 + numero3) / 3
result = (media >= 7 ? 'Aprovado' : 'Reprovado')

registros +=  1

console.log("--------------------------------------------------")
console.log("---------- O resultado do aluno é: " + result + " -----")

//Singular e plural ao apresentar o número de registros
if (registros <= 1){ 
console.log("------------------ "+registros+ " Registro cadastrado ---------------------")
}
else{ 
  console.log("------------------ "+registros+ " Registros cadastrados ---------------------")
  }

}

