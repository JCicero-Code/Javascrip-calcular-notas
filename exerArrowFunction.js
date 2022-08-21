console.log("|".repeat(40))

console.log("-----Function normal-----")

function soma(){
    
    return 2 + 2;
    
}

console.log(soma());


console.log("-----Com parâmetros--------")

function somaDois(num1,num2){
    
    resposta = num1 + num2
    return resposta
 
}

console.log(somaDois(8,8))


console.log("-----Arrow function--------")

let somaTres = () => 5 + 12

console.log(somaTres())


console.log("|".repeat(40))

