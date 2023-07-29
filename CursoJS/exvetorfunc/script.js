var numeros = []
var i = 0
function adicionar() {
    var num = Number(document.getElementById('inum').value)
    var select = document.getElementById('ilista')
    numeros.push(num)

    select.innerHTML += (`<option>Valor ${numeros[i]} adicionado!</option>`)
    i++
}