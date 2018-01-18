var $menuOpen = false;
var $navHeight = window.innerHeight / 5;
var scroll = $(window).scrollTop();
var scrolled = false;

$('#project-gallery-container').fadeIn(800);
$('footer').fadeIn().css('display','flex');

$('.project-thumb').hover(function(){
	$(this).find('.project-overlay').stop().fadeIn().css('display','flex');
}, function(){
	$(this).find('.project-overlay').stop().fadeOut();
});

$('#to-top').click(function(){
	$('html,body').animate({
		scrollTop: 0
	}, 700);
});


projectFadeIn('#ikoiko');
projectFadeIn('#wordpress');
projectFadeIn('#bestroute');
projectFadeIn('#floatbox');
projectFadeIn('#logos');
projectFadeIn('#rich');

function projectFadeIn(project){
	$(project).click(function(){
		$('#project-gallery-container').fadeOut();
		$("div[value='"+project+"']").css('display','block');
		$('#single-project-container, #to-top').fadeIn();

		$('html,body').animate({
			scrollTop: 0
		}, 500);
	});
}

$(window).scroll(function(event) {
	var scroll = $(window).scrollTop();
    if (scroll > $navHeight){
		scrolled = true;
		$('#nav-items').css('height','10vh');
		$('nav').css('position','fixed');
		$('#master-container').css('padding-top','10vh');
		$('#single-project-container').css('padding-top','10vh');
    } else{
		scrolled = false;
		$('#nav-items').css('height','20vh');
		$('nav').css('position','relative');
		$('#master-container').css('padding-top','0');
		$('#single-project-container').css('padding-top','0');
	}
});

$('#hamburger-wrapper').click(function(event){
	if(!$menuOpen){
		$(".burger-line").css({
			"width":"100%",
			"top":"10px"

		});

		if(scrolled){
			$('#menu').css('height','80vh');
			$('#nav-items').css('height','20vh');
			$('nav').css('position','fixed');
		} else{
			$('#menu').css('height','80vh');
			$('nav').css('position','relative');
			$('#master-container').css('padding-top','20vh');
		}

		$("#hamburger-wrapper").css('width','30px');
		$(".top").addClass("rotate1");
		$(".btm, .mdl").addClass("rotate2");
		$('body').css('overflow','hidden');
		$('#menu span').stop().fadeIn(1000);
		$('#about').stop().fadeIn(1000);

		setTimeout(function(){$('#black-block').css('width','100%');}, 400);
		setTimeout(function(){$('#about p').css('opacity','1');}, 1000);
		setTimeout(function(){$('#white-block').css('width','100%');}, 1100);
		setTimeout(function(){$('#black-block').css('opacity','0');}, 1500);

		$menuOpen = true;
	} else{
		$(".burger-line").css({
			"width":"110%",
			"top":"0"
		});
		if(scrolled){
			$('#nav-items').css('height','10vh');
			$('nav').css('position','fixed');
		} else{
			$('#nav-items').css('height','20vh');
			$('nav').css('position','relative');
		}

		$('#menu').css('height','0');
		$('#master-container').css('padding-top','0');
		$("#hamburger-wrapper").css('width','40px');
		$(".top").removeClass("rotate1");
		$(".btm, .mdl").removeClass("rotate2").css({'top':'15px','width':'60%'});
		$('body').css('overflow','auto');
		$('#menu span').stop().fadeOut(10);
		$menuOpen = false;
	}
});

// Lazy load images homepage
	$(window).scroll(function() {
	$.each($('img'), function() {
		if ( $(this).attr('data-src') && $(this).offset().top > ($(window).scrollTop() + $(window).height() + 300) ) {
			var source = $(this).data('src');
			$(this).attr('src', source);
			$(this).removeAttr('data-src').css('opacity','0.5');
		} else{
			var source = $(this).data('src');
			$(this).attr('src', source);
			$(this).removeAttr('data-src').css('opacity','1');
		}
	})
	})
