
/*Efecte pe butoanele din aside*/

$('.aside-1 img').hover(function(){
    TweenMax.to($(this),0.5,{scale:1.53}); 
     
},
    function(){
    TweenMax.to($(this),0.5,{scale:1}); 
   
}) 

$('.aside-2 img').hover(function(){
    TweenMax.to($(this),0.5,{scale:1.32}); 
},
    function(){
    TweenMax.to($(this),0.5,{scale:1}); 
    
}) 