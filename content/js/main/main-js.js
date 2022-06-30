/**main js */

//header js

$(window).scroll(function(){
    let scrollTop=$(window).scrollTop();
    if(scrollTop>50){
        $('.header-nav').addClass('header-fixed');
    }else{
        $('.header-nav').removeClass('header-fixed');
    }
})

$('.btn-menu').click(function(){
    $('nav').toggleClass('header-menu-active');
})
//counter
$(window).on("load resize",function() {

    var counters = $(".counter");
    var countersQuantity = counters.length;
    var counter = [];
  
    for (i = 0; i < countersQuantity; i++) {
      counter[i] = parseInt(counters[i].innerHTML);
    }
  
    var count = function(start, value, id) {
      var localStart = start;
      setInterval(function() {
        if (localStart < value) {
          localStart++;
          counters[id].innerHTML = localStart;
        }
      }, 4);
    }
  
    for (j = 0; j < countersQuantity; j++) {
      count(0, counter[j], j);
    }
});

//js slider about
$('.owl-carousel').owlCarousel({
    rtl:true,
    loop:true,
    margin:0,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        375:{
            items:1
        },
        500:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})