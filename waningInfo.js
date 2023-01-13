var waningButton = document.getElementById('botonWarning');
var waningPanel = document.getElementById('infoWarning');
var body = document.getElementById('body');


waningButton.style.cursor = 'pointer';
waningButton.onclick = function() {

    waningPanel.style.marginTop = "0px"
    waningPanel.style.animationPlayState="running"
    body.style.backgroundColor=" #02ffc8"
    
}