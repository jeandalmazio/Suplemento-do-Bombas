document.getElementById('BombaEgg').onclick = function() {mudafoto()};
var ovo = document.getElementById('BombaEgg')

function mudafoto(){
    // eu perdi a entrega de uma outra atividade pq n era 2 iguais, fiquei 50 minutos encucado não sabendo o que fazer
    if(document.getElementById("BombaEgg").src = "imagens/BombaEgg.png"){
        document.getElementById("BombaEgg").src = 'imagens/Salumbombado.png';
        document.getElementById('BombaEgg').style.opacity = "1";
        document.getElementById('BombaEgg').style.width = "150px"
    } else document.getElementById("BombaEgg").src = 'imagens/BombaEgg.png';
}
function home(){
    document.createElement('button');
    window.location.href = ""
}
