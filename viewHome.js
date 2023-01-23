
     

/*animacion loader */
    var loader = document.getElementById('loader')

    addEventListener("load",(event) => {
        loader.style.animationPlayState='running'
    })
    loader.style.animationPlayState='pause'
/*corrector de tamaños*/
    var homeFloated = document.getElementById('homeFloated');
    var cuerpo = document.getElementById('cuerpo')

    
    homeFloated.style.marginTop = ((innerHeight/190))+"vh";
    var homeWidth=homeFloated.style.width;

    addEventListener("resize", (event) => {

        

        cuerpo.style.backgroundSize = innerWidth+"px "+innerHeight+"px";
        homeFloated.style.marginTop = ((innerHeight/190))+"vh";});



/*animacion derecha */
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




/*menu*/

var menu = document.getElementById('menu')
var state = 0;
function openMenu(){
    
    if(state==1){
        state=0;
        menu.style.animationName="closeMenuAnimation";
        cab.style.color="black";
        menu.style.display="none";
        document.getElementById('b2').style.filter="invert(100%)";
        document.getElementById('b3').style.filter="invert(0%)";
        cuerpo.style.overflow="";

    }
    else{
        state=1;
        menu.style.animationName="openMenuAnimation";
        cab.style.color="white";
        menu.style.display="block";
        document.getElementById('b2').style.filter="invert(0%)";
        document.getElementById('b3').style.filter="invert(100%)";
        cuerpo.style.overflow="hidden";
        
        
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
    menu.style.animationPlayState=("running");
    
}

document.addEventListener('DOMContentLoaded', function() {
    
 }, true);

   
