function calcular() {
    var agr = new Date()
    var ano = agr.getFullYear()
    var idade = ano - Number(document.getElementById('iano'). value)
    var caixa = document.getElementById('show')
    var p = document.getElementById('para')

    p.innerHTML = (`Detectamos que você é e tem ${idade} anos`)

}