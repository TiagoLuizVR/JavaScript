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
            <span class="material-symbols-outlined" onclick="somarpontos(${i})">add</span>
            <span class="material-symbols-outlined menos" onclick="removerpontos()">remove</span>
            <div id="side">
                <p>Total: </p><div id="res${i}">0</div>
            </div>
            </div>
            </div>`)
        }
    }

}
var tudo = [0,0,0,0,0,0,0,0,0,0]
var listapontos = []

function somarpontos(n) {
    var valor = Number(document.getElementById(`ipontos${n}`).value)
    var inserir = document.getElementById(`res${n}`)
    listapontos[n] = valor
    tudo[n] += listapontos[n]
    
    inserir.innerHTML = tudo[n]
}