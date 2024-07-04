function calcularPontuacao(gols, passesCertos, passesErrados) {
    var pontosGols = gols * 50;
    var pontosPassesCertos = passesCertos * 10;
    var pontosPassesErrados = passesErrados * (-5);
    
    var pontuacaoTotal = pontosGols + pontosPassesCertos + pontosPassesErrados;
    return pontuacaoTotal;
}

function avaliarDesempenho(pontuacao) {
    var mensagem = "";
    switch (true) {
        case (pontuacao < 50):
            mensagem = "Péssima partida.";
            break;
        case (pontuacao < 100):
            mensagem = "Partida ruim.";
            break;
        case (pontuacao < 150):
            mensagem = "Fez o básico.";
            break;
        case (pontuacao < 200):
            mensagem = "Foi bem na partida.";
            break;
        default:
            mensagem = "Jogou demais!";
    }
    return mensagem;
}

console.log(`A pontuação do jogador foi: ` + pontuacaoTotal);
console.log(`Desempenho: ` + pontuacao);
