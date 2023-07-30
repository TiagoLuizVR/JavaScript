var numeros = []
var i = 0
function adicionar() {
    var num = document.getElementById('inum').value
    var select = document.getElementById('ilista')


    if(num.length == 0 || num > 100 || num < 0) {
        alert('Valor incorreto ou já adicionado!')
    } else {
        numeros.push(num)
        select.innerHTML += (`<option>Valor ${num} adicionado!</option>`)
    }
}