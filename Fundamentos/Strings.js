const escola = "Cod3r"

console.log(escola.charAt(4))
// .charAt -> identifica qual caractere está na posição desejada
console.log(escola.substring(1))
console.log(escola.substring(0, 3))
// .substring -> imprime no terminal somente a partir da casa desejada
console.log('Escola'.concat(escola).concat("!"))
// .concat -> usado para concatenar stirngs 
console.log(escola.replace(3, "e"))
// .replace -> substitui a posição indicada pela letra declarada a seguir
console.log("Ana,Maria,Pedro".split(','))
// .split -> cria um array com as strings e as separa pelo caractere indicado

// Expressões...
console.log(`1+1 = ${1 + 1}`)   // Para esse caso eu uso crase, não aspas (simples ou duplas)

const up = texto => texto.toUpppercase()
console.log (`Ei... ${up('cuidado')}!`)
