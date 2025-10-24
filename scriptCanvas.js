const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const img1 = new Image();
img1.src = "imagens/sprite1.png";

const img2 = new Image();
img2.src = "imagens/sprite2.png";

const img3 = new Image();
img3.src = "imagens/sprite3.png";


let carregada = 0;
let indice = 0;
const imagens = [img1, img2, img3];

function verificarcarregamento() {
    carregada++;
    if (carregada === imagens.length) {
        animar();
    }
}
img1.onload = verificarcarregamento;
img2.onload = verificarcarregamento;
img3.onload = verificarcarregamento;

function animar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    ctx.drawImage(imagens[indice], 0, 0, 60, 60);
    
    indice = (indice + 1) % imagens.length;

    setTimeout(animar, 500);
    
}


