
var container = document.getElementById('parallaxContainer');

var image = document.getElementById('parallax');
        image.style.position.right='0';
        image.style.width='40vw';
        image.style.height='145px';
        image.style.display="grid";
        image.style.grid='column: 1';
        image.style.position='relative';
        
        
        new simpleParallax(image, {
            overflow:false,
            scale:4,
            delay:4,
            transition: 'cubic-bezier(0,0,0,1)'
        });


        

