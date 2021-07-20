
//Efectele din Header
TweenMax.fromTo('#page-header h4 ', 0.6, { y: -80, opacity: 0 }, {y: 0, opacity:1, delay:0.5 });
TweenMax.fromTo('#page-header h1 ', 0.8, { y: -80, opacity: 0 }, {y: 0, opacity:1, delay:0.5 });
TweenMax.fromTo('#page-header p ', 1, { y: -80, opacity: 0 }, {y: 0, opacity:1, delay:0.5 });
TweenMax.fromTo('#page-header .image-bot ', 0.8, { x:80, opacity: 0 }, {x: -20, opacity:1, delay:0.5 });

$('#skills .hov-eff').hover(function() {
  TweenMax.to($(this), 0.5, { y:-10, scale: 1.03 });
  TweenMax.to($(this), 0.5, { boxShadow: '0 0 1px rgba(0,0,0,0.3)'  });
},
   function() {
  TweenMax.to($(this), 0.5, { y:0, scale: 1 });
  TweenMax.to($(this), 0.5, { boxShadow: '0 0 1px rgba(0,0,0,0.06)'  });
});

