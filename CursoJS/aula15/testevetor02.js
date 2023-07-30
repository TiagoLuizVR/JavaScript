var lista = [5,7,4]
var n = 2
var x = 0
for(var i in lista) {
    if(n == lista[i]) {
        x = 1
        break
    }
}
if (x == 1) {
    console.log(`O número ${n} está na lista!`)
} else {
    console.log(`O número ${n} NÃO está na lista!`)
}