const $html = document.querySelector('html');

var logo = anime({
    targets: '#logo',
    scale: 25,
    easing: 'easeInOutSine',
    opacity:0,
    autoplay: false,
  });

var header = anime({
    targets:'#header',
    translateY:-100,
    opacity:0,
    easing: 'easeInSine',
    //duration:500,
    autoplay:false,
})
var content01 = anime({
    targets:'#content01',
    translateY:100,
    opacity:0,
    easing: 'easeInSine',
    autoplay:false,
})

var content02 = anime({
    targets:'#content02',
    translateY:-130 + 'vh',
    easing: 'easeInSine',
    autoplay:false,
})
var content03 = anime({
    targets:'#content03',
    translateY:-130 + 'vh',
    easing: 'easeInSine',
    autoplay:false,
})
var content04 = anime({
    targets:'#content04',
    translateY:-130 + 'vh',
    easing: 'easeInSine',
    autoplay:false,
})
var content05 = anime({
    targets:'#content05',
    translateY:-130 + 'vh',
    easing: 'easeInSine',
    autoplay:false,
})
var content06 = anime({
    targets:'#content06',
    translateY:-130 + 'vh',
    easing: 'easeInSine',
    autoplay:false,
})


var mouse = anime({
    targets:'#mouse',
    translateY:100,
    opacity:0,
    easing: 'easeInSine',
    autoplay:false,
})

var logobg = anime({
    targets:'#logobg',
    scale:2.7,
    opacity:0,
    easing: 'linear',
    autoplay:false,
})


var pic02 = anime({
    targets:'#pic02',
    opacity:1,
    easing: 'easeInSine',
    autoplay:false,
})
var pic03 = anime({
    targets:'#pic03',
    opacity:1,
    easing: 'easeInSine',
    autoplay:false,
})
var pic04 = anime({
    targets:'#pic04',
    opacity:1,
    easing: 'easeInSine',
    autoplay:false,
})
var pic05 = anime({
    targets:'#pic05',
    opacity:1,
    easing: 'easeInSine',
    autoplay:false,
})
var pic06 = anime({
    targets:'#pic06',
    opacity:1,
    easing: 'easeInSine',
    autoplay:false,
})
var yellowbg= anime({
    targets:'#yellowbg',
    scale:60,
    easing:'easeInOutQuart',
    //translateY: -10+'vh',
    //translateX: 110+'vw',
    autoplay:false,
})

var question = anime({
    targets:'#question',
    opacity:1,
    translateY:-20+'vh',
    autoplay:false,
    easing:'easeInOutSine',
    duration:1000,
})

var eye= anime({
    targets:'#eye',
    keyframes:[
        {translateY:-95 + 'ch'},
        {scale:20},
    ],
    duration:4000,
    easing:'easeInOutSine',
    autoplay: false,
})

var anser=anime({
    targets:'#anser',
    translateY:[
        {value:-100 + 'ch'},
    ],
    opacity:[
        {value:1},
        {value:0},
    ],
    duration:4000,
    easing:'easeInSine',
    autoplay: false,
})


var k2= anime({
    targets:'#k2',
    keyframes:[
        {translateY:-10 + 'ch',opacity:1},
        {translateY:-80 + 'ch'},
    ],
    duration:4000,
    easing:'easeInOutBack',
    autoplay: false,
})

var k3= anime({
    targets:'#k3',
    keyframes:[
        {translateY:-10 + 'ch',opacity:1},
        {translateY:-90 + 'ch'},
    ],
    duration:3600,
    easing:'easeInOutBack',
    autoplay: false,
})

var k4= anime({
    targets:'#k4',
    keyframes:[
        {translateY:-10 + 'ch',opacity:1},
        {translateY:-90 + 'ch'},
    ],
    duration:3000,
    easing:'easeInOutBack',
    autoplay: false,
})

var k5= anime({
    targets:'#k5',
    keyframes:[
        {translateY:-10 + 'ch',opacity:1},
        {translateY:-80 + 'ch'},
    ],
    duration:3400,
    easing:'easeInOutBack',
    autoplay: false,
})

var k6= anime({
    targets:'#k6',
    keyframes:[
        {translateY:-10 + 'ch',opacity:1},
        {translateY:-90 + 'ch'},
    ],
    duration:3500,
    easing:'easeInOutBack',
    autoplay: false,
})

var k7= anime({
    targets:'#k7',
    keyframes:[
        {translateY:-10 + 'ch',opacity:1},
        {translateY:-110 + 'ch'},
    ],
    duration:4200,
    easing:'easeInOutBack',
    autoplay: false,
})

var k8= anime({
    targets:'#k8',
    keyframes:[
        {translateY:-10 + 'ch',opacity:1},
        {translateY:-80 + 'ch'},
    ],
    duration:4000,
    easing:'easeInOutBack',
    autoplay: false,
})

var k9= anime({
    targets:'#k9',
    keyframes:[
        {translateY:-10 + 'ch',opacity:1},
        {translateY:-90 + 'ch'},
    ],
    duration:3600,
    easing:'easeInOutBack',
    autoplay: false,
})

var worry=anime({
    targets:'#worry',
    translateX:-150+'vw',
    easing:'easeInOutCubic',
    autoplay: false,
})

var habit=anime({
    targets:'#habit',
    translateX:-150+'vw',
    easing:'easeInOutCubic',
    autoplay: false,
})

var p1=anime({
    targets:'#p1',
    translateX:-150+'vw',
    easing:'easeInOutCubic',
    autoplay: false,
})

var p2=anime({
    targets:'#p2',
    translateX:-150+'vw',
    easing:'easeInOutCubic',
    autoplay: false,
})

var p3=anime({
    targets:'#p3',
    translateX:-150+'vw',
    easing:'easeInOutCubic',
    autoplay: false,
})

var p4=anime({
    targets:'#p4',
    translateX:-150+'vw',
    easing:'easeInOutCubic',
    autoplay: false,
})

var balance=anime({
    targets:'#balance',
    translateX:-150+'vw',
    easing:'easeInOutCubic',
    autoplay: false,
})

var end=anime({
    targets:'#end',
    translateX:-150+'vw',
    easing:'easeInOutCubic',
    autoplay:false,
})


window.addEventListener('scroll', function(e){
    let scrolled = document.documentElement.scrollTop/(document.documentElement.scrollHeight - 
        document.documentElement.clientHeight);

        let $header = document.querySelector('#header')
        let $logo = document.querySelector('#logo')
        let $logobg = document.querySelector('#logobg')
        let $mouse = document.querySelector('#mouse')
        let $content01 = document.querySelector('#content01')

        //$logo.style.width = document.documentElement.clientWidth * 30 * scrolled +'px';
        //$logobg.style.opacity = 0.2 + scrolled* 5;
        //$logobg.style.width = document.documentElement.clientWidth * 15 * (scrolled-0.1) +'px';
        
            p1.seek((scrolled-0.76) * 8 * p1.duration);
            p2.seek((scrolled-0.80) * 8 * p2.duration);
            p3.seek((scrolled-0.84) * 8 * p3.duration);
            p4.seek((scrolled-0.88) * 8 * p4.duration);
            balance.seek((scrolled-0.93) * 8 * balance.duration);
            end.seek((scrolled-0.93) * 8 * end.duration);
        

        
            worry.seek((scrolled-0.7) * 8 * worry.duration);
            habit.seek((scrolled-0.71) * 8 * habit.duration);
        
        
        
            anser.seek((scrolled-0.6) * 8 * anser.duration);
            k2.seek((scrolled-0.62) * 8 * k2.duration);
            k3.seek((scrolled-0.63) * 7 * k3.duration);
            k4.seek((scrolled-0.64) * 9 * k4.duration);
            k5.seek((scrolled-0.62) * 8 * k5.duration);
            k6.seek((scrolled-0.63) * 7 * k6.duration);
            k7.seek((scrolled-0.64) * 8 * k7.duration);
            k8.seek((scrolled-0.65) * 9 * k8.duration);
            k9.seek((scrolled-0.62) * 7 * k9.duration);
       
            
            eye.seek((scrolled-0.55) * 7 * eye.duration);
            question.seek((scrolled-0.5) * 10 * question.duration);
        
            
            content06.seek((scrolled-0.4) * 20 * content06.duration);
            pic06.seek((scrolled-0.4) * 40 * pic06.duration);
            yellowbg.seek((scrolled-0.45) * 15 * yellowbg.duration);
  
            
            content05.seek((scrolled-0.35) * 20 * content05.duration);
            pic05.seek((scrolled-0.35) * 40 * pic05.duration);
   
            
            content04.seek((scrolled-0.3) * 20 * content04.duration);
            pic04.seek((scrolled-0.3) * 40 * pic04.duration);
      
            
            content03.seek((scrolled-0.25) * 20 * content03.duration);
            pic03.seek((scrolled-0.25) * 40 * pic03.duration);

   
            content02.seek((scrolled-0.2) * 20 * content02.duration);
     
            logo.seek((scrolled-0.07) * 10 * logo.duration);
            logobg.seek((scrolled-0.1) * 10 * logobg.duration);
            pic02.seek((scrolled-0.13) * 15 * pic02.duration);
      
            header.seek(scrolled* 30 * header.duration);
            content01.seek(scrolled* 30 * content01.duration);
            mouse.seek(scrolled* 30 * mouse.duration);
        
});