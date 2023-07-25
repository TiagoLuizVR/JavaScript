function calcular() {
    var num = document.getElementById('inum').value
    var caixa = document.getElementById('iselect')

    if(num.length == 0) {
        alert('Digite um número!')
    } else {
        caixa.innerHTML = ''
        var n = Number(num)
        var i = 1

        while(i <= 10) {
            var op = document.createElement('option')
            op.text = `${n} x ${i} = ${n*i}`
            op.value = (`v${i}`)
            caixa.appendChild(op)
            i++
        }
    }
}