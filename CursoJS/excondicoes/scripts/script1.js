var agr = new Date()
var hora = agr.getHours()
var caixa = document.getElementById('boximg')
var para = document.getElementsByTagName('p')[0]
para.innerText = (`Agora são exatamente ${hora} horas`)
if (hora < 12) {
    caixa.style.backgroundImage = 'url(imagens/manha.jpg)'
    caixa.style.backgroundSize = 'cover'
} else if (hora < 18) {
    caixa.style.backgroundImage = 'url(imagens/tarde.jpg)'
    caixa.style.backgroundSize = 'cover'
} else {
    caixa.style.backgroundImage = 'url(imagens/noite.jpg)'
    caixa.style.backgroundSize = 'cover'
}