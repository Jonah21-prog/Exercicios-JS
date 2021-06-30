const peso1 = 1.0
const peso2 = Number ("2.0")

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))
// console.log -> usado para imprimir coisas no terminal
// console.log ->  equivale ao Print

const avaliacao1 = 9.871 
const avaliacao2 = 8.463

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1+peso2)

console.log(media.toFixed(2))
// .toFixed -> serve para identificar quantas casas decimais serão usadas
// Dentro dos parenteses representa quantas serão essas casas decimais

console.log (7/0)
console.log("10" + 12)
// JS é uma linguagem fracamente tipada, um exemplo é que posso somar uma string de um numero com um numero
