let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1 
console.log(!!isAtivo)   // (!!) -> negação duas vezes

console.log('Os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!! ' ')
console.log(!!'Texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))
// Tipos de expressões que retornariam como verdadeiro no console

console.log('Os falsos...')
console.log(!!0)
console.log(!!'') // Nesse caso não há nem espaço dentro da string, por isso retorna False
console.log(!!Null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('Para finalizar...')
console.log(!!('' || null || 0 || ' ')) // (||) -> Expressão booleana Ou

let nome = 'Jonas'
console.log(nome || 'Desconhecido')

let nome1 = ''
console.log(nome1 || 'Desconhecido')

