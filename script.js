/*$(init);

function init() {*/
/*$(window).load(function() { 
	$("body").css( {"opacity": "1", "background-image": "none"})// opacity allows transition
  setTimeout(function() {
    $(".load-screen").fadeOut();
  }, 1000);
});*/



$(document).ready(function() {
  // On scale transitions

  $(".load-screen").show();
  //$("body").hide();


  $(".load-screen button").click(function() {

    $(".load-screen").hide();
    $(".wrap").css({
      "opacity": "1"
    }) // opacity allows transition
    setTimeout(function() {
      $(".load-screen").fadeOut();
    }, 1000);
  });

  if (!sessionStorage.isVisited) {
    sessionStorage.isVisited = 'true';
    // $(".load-screen").delay(2000).fadeOut("slow")
    $(".load-screen").show();
  } else {
    $(".load-screen").hide();
    $(".wrap").css({
      "opacity": "1"
    });
  }

});

var nameText = 'My Name'
$('.name').text(nameText);


var mood = ["scene <span class='icon'>&#129311;</span>", "wise <span class='icon'>&#127776;</span>", "love <span class='icon'>&#10084;</span>", "wild <span class='icon'>&#129426;</span>","dork proof <span class='icon'>&#9889;</span>", "life <span class='icon'>&#x1F344;</span>", "nostalgic <span class='icon'>&#x1F4C0;</span>", "HG summer <span class='icon'>&#127774;</span>", "creative <span class='icon'>&#x1F30C;</span>", "amaze <span class='icon'>&#128008;</span>", "dk <span class='icon'>&#10068;</span>", "vibes <span class='icon'>&#x1F334;</span>", "cringey <span class='icon'>&#x1F345;</span>", "fall basic <span class='icon'>&#x1F342;</span>", "hungry <span class='icon'>&#127829;</span>", "brave <span class='icon'>&#x1F981;</span>","trendy <span class='icon'>&#129361;</span>","3rd <span class='icon'>&#x1F949;</span>","nutritious <span class='icon'>&#129382;</span>","animal <span class='icon'>&#129418;</span>","royal <span class='icon'>&#129332;</span>","awkward <span class='icon'>&#128760;</span>","pure <span class='icon'>&#128330;</span>","fascinate <span class='icon'>&#128142;</span>","troll <span class='icon'>&#x1F44C;</span>"," <span class='icon'>&#128007;</span>","power <span class='icon'>&#127993;</span>","neat <span class='icon'>&#127905;</span>","pawn <span class='icon'>&#9823;</span>","star <span class='icon'>&#11088;</span>","rat <span class='icon'>&#128001;</span>","sheep <span class='icon'>&#128017;</span>","g.o.a.t <span class='icon'>&#128016;</span>","flaunT <span class='icon'>&#128038;</span>", "weird <span class='icon'>&#128125;</span>","British <span class='icon'>&#128130;</span>","fun <span class='icon'>&#129428;</span>"];

var counter = 0;
var elem = $(".mood");
mood.sort(() => Math.random() - 0.5);
var inst = setInterval(change, 50000);
//$(".mood").html("scene <span class='icon'>&#129311;</span>");
$('.mood').html(mood[counter]);
function change() {
  $(".mood").html(mood[counter]);
  counter++;
  if (counter >= mood.length) {
    counter = 0;
    // clearInterval(inst); // uncomment this if you want to stop refreshing after one cycle
  }
}

/* $("#buttonId").click(function() {
  var numElements =  $(".newjobz").length;
  var randomContent = $(".newjobz").eq(Math.floor(Math.random() * numElements)).html();
  $("#divToChange").html(randomContent); 
});
 */
// current date
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
$('.last-login').append(today);

// Text Rotator
var next;
(function($) {

  $.fn.extend({
    rotaterator: function(choices) {

      var defaults = {
        fadeSpeed: 1000,
        pauseSpeed: 2000,
        child: null
      };

      choices = $.extend(defaults, choices);

      return this.each(function() {
        var c = choices;
        var obj = $(this);
        var items = $(obj.children(), obj);
        items.each(function() {
          $(this).hide();
        });
        if (!c.child) {
          next = $(obj).children(':first');
        } else {
          next = c.child;
        }
        $(next).fadeIn(c.fadeSpeed, function() {
          $(next).delay(c.pauseSpeed).fadeOut(c.fadeSpeed, function() {
            var next = $(this).next();
            if (next.length === 0) {
              next = $(obj).children(':first');
            }
            $(obj).rotaterator({
              child: next,
              fadeSpeed: c.fadeSpeed,
              pauseSpeed: c.pauseSpeed
            });
          });
        });
      });
    }
  });
})(jQuery);


$(document).ready(function() {
  'use strict';
  $('.testimonials').rotaterator({
    fadeSpeed: 1000,
    pauseSpeed: 3000
  });
});
// text rotator end

// static flash
$(".dev-logo").click(function() {
  $("body").addClass("slide-clicked");
  setTimeout(function() {
    $("body").removeClass("slide-clicked");
  }, 1000);
  $(".dev-logo img").toggle();
});


// Project Animations

function foo(doBar) {
  $('.has-animation').each(function(index) {

    if ($(window).scrollTop() + $(window).height() > $(this).offset().top + $(this).outerHeight()) {
      $(this).delay($(this).data('delay')).queue(function() {
        $(this).addClass('animate-in');

      });
    }
  });
}
foo();
// $(window).on('scroll',function() {
// 	if($(window).scrollTop() + $(window).height() > $('.has-animation').offset().top){ 
// 	foo();
// 	}
// });


//$( document ).ready(function() {
// var image = $('.img-profile');
var aboutPosition = $('.service').top / (.5);

$(window).on('scroll', function() {

  var scrollTop = $(this).scrollTop();
  $(this).css({
    'top': (aboutPosition - scrollTop)
  });

  if (scrollTop > aboutPosition) {
    $(this).css({
      'top': 0
    });
  }


  var fadeInTime = 0;

  $('.service').each(function(i) {

    var bottom_of_object = $(this).offset().top + $(this).outerHeight();
    var bottom_of_window = $(window).scrollTop() + $(window).height();

    if (bottom_of_window > bottom_of_object / 1.25 || bottom_of_window > bottom_of_object / 1.90) {
      fadeInTime = fadeInTime + 500;
      $(this).delay(fadeInTime).animate({
        'opacity': '1'
      }, 1000);

    }
  });
  //});


});
