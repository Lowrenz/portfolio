jQuery(document).ready(function($){
    
    setTimeout(function(){
        $(".cd-slider-wrapper").addClass("animated slideInRight");
        $(".cd-slider-wrapper").show();
    },500);
    
    setTimeout(function(){
        $("#mobile-nav").addClass("animated slideInLeft");
        $("#mobile-nav").show();
        $(".branding").addClass("animated slideInLeft");
        $(".branding").show();
    },1200);

    $(".cta").click(function(){
        
        $("#intro").removeClass('animated slideInRight slideInLeft slideOutRight slideOutLeft introAnimation');
        $("#intro").addClass("animated slideOutLeft");
        
        setTimeout(function(){
            window.location.href="vision.html";
        },900);
        
    });
    
    // On leaving the page
    
    $("a[target!='_blank']").click(function(event) {
        event.preventDefault();
        var url = $(this).attr('href');
        //$(".cd-slider-wrapper").removeClass('animated slideInRight slideInLeft slideOutRight slideOutLeft');
        $("body").addClass("animated slideOutLeft");
        setTimeout(function(){
            window.location.href=url;
        },900);
    });
    
    // Mobile nav
    
	$('#mobile-nav').click(function(){
		$(this).toggleClass('open');
        if($(this).hasClass('open')){
            $(".navback").removeClass("animated slideOutLeft");
            $(".navback").addClass("animated slideInLeft");
            $(".navback").show();
            
            setTimeout(function(){
                $("#mobile-nav nav").removeClass("animated slideOutLeft");
                $("#mobile-nav nav").addClass("animated slideInLeft");
                $("#mobile-nav nav").show();
            }, 300);
        }else{
            $("#mobile-nav nav").removeClass("animated slideInLeft");
            $("#mobile-nav nav").addClass("animated slideOutLeft");
            
            setTimeout(function(){
                //$("#mobile-nav nav").hide();
                $(".navback").removeClass("animated slideInLeft");
                $(".navback").addClass("animated slideOutLeft");
                //$(".navback").hide();
            }, 300);
        }
	});
    
    
	var sliderContainers = $('.cd-slider-wrapper');

	if( sliderContainers.length > 0 ) initBlockSlider(sliderContainers);

	function initBlockSlider(sliderContainers) {
		sliderContainers.each(function(){
			var sliderContainer = $(this),
				slides = sliderContainer.children('.cd-slider').children('li'),
				sliderPagination = createSliderPagination(sliderContainer);
            
			sliderPagination.on('click', function(event){
				event.preventDefault();
				var selected = $(this),
					index = selected.index();
				updateSlider(index, sliderPagination, slides);
			});
            
            /*sliderContainer.on('scroll', function(){
				//event.preventDefault();
                var bool = enableSwipe(sliderContainer),
					visibleSlide = sliderContainer.find('.is-visible').last(),
					visibleSlideIndex = visibleSlide.index();
                
				if(!visibleSlide.is(':last-child') && bool) {
                    updateSlider(visibleSlideIndex + 1, sliderPagination, slides);
                }
			});*/

			sliderContainer.on('swipeleft', function(){
				var bool = enableSwipe(sliderContainer),
					visibleSlide = sliderContainer.find('.is-visible').last(),
					visibleSlideIndex = visibleSlide.index();
				if(!visibleSlide.is(':last-child') && bool) {updateSlider(visibleSlideIndex + 1, sliderPagination, slides);}
			});

			sliderContainer.on('swiperight', function(){
				var bool = enableSwipe(sliderContainer),
					visibleSlide = sliderContainer.find('.is-visible').last(),
					visibleSlideIndex = visibleSlide.index();
				if(!visibleSlide.is(':first-child') && bool) {updateSlider(visibleSlideIndex - 1, sliderPagination, slides);}
			});
		});
	}

	function createSliderPagination(container){
		var wrapper = $('<ol class="cd-slider-navigation"></ol>');
		container.children('.cd-slider').find('li').each(function(index){
			var dotWrapper = (index == 0) ? $('<li class="selected"></li>') : $('<li></li>'),
				dot = $('<a href="#0"></a>').appendTo(dotWrapper);
			dotWrapper.appendTo(wrapper);
			var dotText = ( index+1 < 10 ) ? '0'+ (index+1) : index+1;
			dot.text(dotText);
		});
		wrapper.appendTo(container);
		return wrapper.children('li');
	}

	function updateSlider(n, navigation, slides) {
		navigation.removeClass('selected').eq(n).addClass('selected');
		slides.eq(n).addClass('is-visible').removeClass('covered').prevAll('li').addClass('is-visible covered').end().nextAll('li').removeClass('is-visible covered');

		//fixes a bug on Firefox with ul.cd-slider-navigation z-index
		navigation.parent('ul').addClass('slider-animating').on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
			$(this).removeClass('slider-animating');
		});
	}

	function enableSwipe(container) {
		return ( container.parents('.touch').length > 0 );
	}
    
    /*************/
            
            var isScrolling = false;

            //Scrolls window to the next div element using the scroll wheel.
            $(function() {          
                $(".cd-slider").mousewheel(function(event, delta) {
                    if(!isScrolling){
                        isScrolling = true;
                        var $current = $('.is-visible');

                        if (delta > 0) {
                            $prev = $current.prev('.slide');

                            if ($prev.length) {
                                $(".cd-slider").scrollTo($prev, 600);
                                $current.removeClass('is-visible');
                                $prev.addClass('is-visible');
                            }
                        } else {
                            $next = $current.next('.slide');

                            if ($next.length) {
                                $(".cd-slider").scrollTo($next, 600);
                                $current.removeClass('is-visible');
                                $next.addClass('is-visible');
                                
                                
                            }
                        }


                        event.preventDefault();
                        setTimeout(function(){
                            isScrolling = false;
                        }, 1800);
                    }
                });
            });

            
            /*************/
    
    // Navigatie Expand
    
    /*$("#nav ul li a").hover(function(){
        $(this).children().show();
    }, function(){
        $("#nav ul li a span").hide('fast');
    });*/
    
    $("#mobile-nav nav ul li a span").hover(function(){
       $(this).addClass("active"); 
    }, function(){
        $(this).removeClass("active");
    });
});