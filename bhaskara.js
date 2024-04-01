// importacao

const prompt = require("prompt-sync")()
// entrada


let a = Number(prompt("digite o valor de a: "))
let b = Number(prompt("digite o valor de b: ")) 
let c = Number(prompt("digite o valor de c: "))

// processamento
let delta = b ** 2 - 4 * a * c
let x1 = (- b - delta ** 0.5)/(2*a)
let x2 = (-b + delta ** 0.5)/(2*a)

// saida
console.log("as duas raizes da equação e: ", x1 , x2)


