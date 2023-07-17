var agr = new Date()
var hora = agr.getHours()
var caixa = document.getElementById('boximg')
var para = document.getElementsByTagName('p')[0]
para.innerText = (`Agora são exatamente ${hora} horas`)

if (hora < 12){
    caixa.innerHTML = ('<img src="imagens/manha.jpg" alt="">')
    document.body.style.backgroundColor = '#c2fafa'
} else if(hora < 18) {
    caixa.innerHTML = ('<img src="imagens/tarde.jpg" alt="">')
    document.body.style.backgroundColor = '#f6c98a'
} else {
    caixa.innerHTML = ('<img src="imagens/noite.jpg" alt="">')
    document.body.style.backgroundColor = '#41403f'
}