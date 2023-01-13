var waningButton = document.getElementById('botonWarning');
var waningPanel = document.getElementById('infoWarning');


waningButton.style.cursor = 'pointer';
waningButton.onclick = function() {

    waningPanel.style.marginTop = "0px"
    waningPanel.style.animationPlayState="running"
}