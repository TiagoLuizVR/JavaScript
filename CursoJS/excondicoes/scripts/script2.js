function calcular() {
    var agr = new Date()
    var ano = agr.getFullYear()
    var user = Number(document.getElementById('iano'). value)
    var idade = ano - user
    var caixa = document.getElementById('show')
    var p = document.getElementById('para')
    var sexo = document.querySelector("input[name='sexo']:checked").value

    if(user >= 1907 && user <= ano) {
        if(sexo == 'homem' && idade < 13) {
            caixa.innerHTML = ('<img src="imagens/menino.jpg" alt="">')
        } else if(sexo == 'homem' && idade < 19) {
            caixa.innerHTML = ('<img src="imagens/garoto.jpg" alt="">')
        } else if(sexo == 'homem' && idade < 60) {
            caixa.innerHTML = ('<img src="imagens/homem.jpg" alt="">')
        } else if(sexo == 'homem' && idade >= 60) {
            caixa.innerHTML = ('<img src="imagens/senhor.jpg" alt="">')
        } else if(sexo == 'mulher' && idade < 13) {
            caixa.innerHTML = ('<img src="imagens/menina.jpg" alt="">')
        } else if(sexo == 'mulher' && idade < 19) {
            caixa.innerHTML = ('<img src="imagens/garota.jpg" alt="">')
        } else if(sexo == 'mulher' && idade < 60) {
            caixa.innerHTML = ('<img src="imagens/mulher.jpg" alt="">')
        } else {
            caixa.innerHTML = ('<img src="imagens/senhora.jpg" alt="">')
        }
        p.innerHTML = (`Detectamos que você é ${sexo} e tem ${idade} anos`)
    } else {
        alert('Dados incorretos!')
    }
}