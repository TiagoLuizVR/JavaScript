var numeros = []
function adicionar() {
    var num = Number(document.getElementById('inum').value)
    var select = document.getElementById('ilista')
    var x = 0

    for(var i in numeros) {
        if(num == numeros[i]) {
            x = 1
            break
        }
    }

    if(document.getElementById('inum').value.length == 0 || num > 100 || num < 0 || x == 1) {
        alert('Valor incorreto ou já adicionado!')
    }else {
        numeros.push(num)
        select.innerHTML += (`<option>Valor ${num} adicionado!</option>`)
    }
    document.getElementById('inum').value = ''
}

function finalizar() {
    var caixa = document.getElementById('show')
    var maior = numeros[0]
    var menor = numeros[0]
    var soma = 0

    for(var ii in numeros) {
        if(maior < numeros[ii]) {
            maior = numeros[ii]
        }
        if(menor > numeros[ii]) {
            menor = numeros[ii]
        }
        soma += numeros[ii]
    }

    
    caixa.innerHTML = (`Foram adicionados ${numeros.length} números!<br>
    O maior número foi ${maior}<br>
    O menor número foi ${menor}<br>
    A soma de todos os números é ${soma}<br>
    A média de todos os números é ${soma/numeros.length}`)
}