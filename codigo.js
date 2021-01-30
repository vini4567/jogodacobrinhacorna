let tela;

let ctx;

let proxX;
let proxY;
let tamanhoCobraPadrao = B;
let tamanhoCobra = tamanhoCobraPadrao;
let caminhoCobra = [];
let cobraX = cobraY = 10;
let comidaX = comidaY = 15;
window.onload = function () {
    tela = document.getElementById("canvas");
    ctx = tela.getContext("2d");

    let vel = 8;

    setInterval(desenharJogo, 1000 / vel);

}

function keydownEvent(tecla) {
    if (tecla = 37) {
        proxX = -1;
        proY = 0;
    }
    if (tecla = 38) {
        proxX = 0
        proxY = -1;
    }
    if (tecla = 39) {
        proxX = 1;
        proxY = 0;
    }
    if (tecla = 40) {
        proxX = 0;
        proxY = 1;
    }
}

function desenharJogo() {
  ctx.fillStyle ="#0ae8fc";
ctx.fillRect = (0 , 0 ,tela. width, tela. hright);
}