var waningButton = document.getElementById('botonWarning');
var waningPanel = document.getElementById('infoWarning');
var body = document.getElementById('body');
var cerrar = document.getElementById('warningCerrar');


waningButton.style.cursor = 'pointer';
waningButton.onclick = function() {

    waningPanel.style.marginTop = "0px"
    waningPanel.style.animationPlayState="running"
    body.style.backgroundColor=" #02ffc8"
    
}
cerrar.style.cursor = 'pointer';
cerrar.onclick = function() {

    waningPanel.style.marginTop = "-1000vh"
    waningPanel.style.animationPlayState="paused"
    body.style.backgroundColor="yellow"

}