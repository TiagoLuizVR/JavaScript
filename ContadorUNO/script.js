function addplayer(){
    var select = document.getElementById('ijogadores')
    var nplayers = Number(select.options[select.selectedIndex].value)
    var caixa = document.getElementById('show')
    var nomep = []

    caixa.innerHTML = ''

    if (nplayers == 0) {
        alert('Selecione uma opção!!')
    } else {
        for(var i = 0; i < nplayers; i++) {
            nomep.push(prompt(`Insira o nome do ${i+1}º jogador!`))
            
            caixa.innerHTML += (`<div class="caixajogador">
            <h1 class="nomejogador">${nomep[i]}</h1>
            <div class="campos">
            <label for="ipontos${i}">Pontos Ganhos</label>
            <input type="number" name="pontos${i}" id="ipontos${i}">
            <span class="material-symbols-outlined" onclick="somarpontos()">add</span>
            <span class="material-symbols-outlined menos" onclick="removerpontos()">remove</span>
            <p class="res${i}">Total:</p>
            </div>
            </div>`)
            
        }
    }
    function somarpontos() {
        for(var i = 0; i < nplayers; i++) {
            
        }
    }
}