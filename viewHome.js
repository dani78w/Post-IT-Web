


var homeFloated = document.getElementById('homeFloated');




var cuerpo = document.getElementById('cuerpo')
/*corrector de tamaño*/
cuerpo.style.backgroundSize = innerWidth+"px "+innerHeight+"px";
homeFloated.style.marginTop = ((innerHeight/190))+"vh";
var homeWidth=homeFloated.style.width;

addEventListener("resize", (event) => {
    cuerpo.style.backgroundSize = innerWidth+"px "+innerHeight+"px";
    homeFloated.style.marginTop = ((innerHeight/190))+"vh";});




var cab = document.getElementById('cab');

function getScrollPercent() {
    var h = document.documentElement, 
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight';
    return (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
}
document.addEventListener("scroll", (event) => {
   
    
    //cab.style.animation=""
    let scrollVertical = getScrollPercent();
    /*
        30 ---- > 100
        100 ----> 333
    */
    var aux = 0
    if (scrollVertical<30){
        aux= scrollVertical
    }else{
        aux=30
    }
    cab.style.backgroundColor = `rgba(0, 0, 0,  ${aux / 100*3}) ` ;
    cityPhone.style.left = `${-scrollVertical*5}px`;

   
  
    //cab.style.filter = `blur (${scrollVertical / 100})` ;
   
});

document.addEventListener("scrollend", (event) => {
    
});


