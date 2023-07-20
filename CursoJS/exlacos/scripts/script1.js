function calcular() {
    var inicio = Number(document.getElementById('iinicio').value)
    var fim = Number(document.getElementById('ifim').value)
    var passo = Number(document.getElementById('ipasso').value)
    var caixa = document.getElementById('show')
    var p = document.getElementById('para')

    caixa.innerText = ('')

    for (var i = inicio; i <= fim ; i += passo){
        caixa.innerHTML += (`${i} &#x1F449;`)
    }
    caixa.innerHTML += ('&#x1F3C1;')

}