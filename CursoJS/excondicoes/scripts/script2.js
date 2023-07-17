function calcular() {
    var agr = new Date()
    var ano = agr.getFullYear()
    var idade = ano - Number(document.getElementById('iano'). value)
    var caixa = document.getElementById('show')
    var p = document.getElementById('para')
    var sexo = document.querySelector("input[name='sexo']:checked").value

    p.innerHTML = (`Detectamos que você é ${sexo} e tem ${idade} anos`)

    if(sexo == 'homem' && idade != null) {
        if(idade < 13){
            caixa.innerHTML = ('<img src="imagens/menino.jpg" alt="">')
        } else if(idade < 19){
            caixa.innerHTML = ('<img src="imagens/garoto.jpg" alt="">')
        } else if(idade < 60){
            caixa.innerHTML = ('<img src="imagens/homem.jpg" alt="">')
        }
        else {
            caixa.innerHTML = ('<img src="imagens/senhor.jpg" alt="">')
        }
    } else if(sexo == 'mulher' && idade != null) {
        if(idade < 13){
            caixa.innerHTML = ('<img src="imagens/menina.jpg" alt="">')
        } else if(idade < 19){
            caixa.innerHTML = ('<img src="imagens/garota.jpg" alt="">')
        } else if(idade < 60){
            caixa.innerHTML = ('<img src="imagens/mulher.jpg" alt="">')
        }
        else {
            caixa.innerHTML = ('<img src="imagens/senhora.jpg" alt="">')
        }
    } else {
        alert = ('Digite os dados corretamente!')
    }
}