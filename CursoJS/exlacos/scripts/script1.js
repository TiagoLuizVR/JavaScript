function calcular() {
    var inicio = Number(document.getElementById('iinicio').value)
    var fim = Number(document.getElementById('ifim').value)
    var passo = Number(document.getElementById('ipasso').value)
    var caixa = document.getElementById('show')
    var p = document.getElementById('para')

    caixa.innerHTML = ''

    if (document.getElementById('iinicio').value.length == 0 || document.getElementById('ifim').value.length == 0 || document.getElementById('ipasso').value.length == 0) {
        alert('Erro!! Preencha todos os campos!')
    }else {
        if(passo <= 0) {
            alert('Intervalo inválido! Considerando passo 1.')
            passo = 1
        }
        p.innerText = 'Contando: '
        if(inicio <= fim) {
            for (var i = inicio; i <= fim ; i += passo){
                caixa.innerHTML += (`${i} &#x1F449;`)
            }
        } else {
            for(var i = inicio; i >= fim; i -= passo){
                caixa.innerHTML += (`${i} &#x1f449;`)
            }
        }
        caixa.innerHTML += ('&#x1F3C1;')
    }


}