let num = [1, 5, 7, 4, 3]
num.push(8)
num.sort()

console.log(`Os valores do vetor são: ${num}`)
console.log(`O tamanho do vetor é ${num.length}`)
console.log(`O primeiro valor é ${num[0]}`)

let pos = num.indexOf(5)
if(pos == -1) {
    console.log('Valor não encontrado!!')
} else {
    console.log(`O valor está na posição ${pos}`)
}