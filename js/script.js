$(document).ready(function(){
	//JS for Margin-top from Header
	var headerHeight = $("header").height() + 20;
	$("section").css("margin-top", headerHeight);
	
	$(window).resize(function(){
			var headerHeight = $("header").height() + 20;
			$("section").css("margin-top", headerHeight);
	});

	
	//JS for Menu Navigation
	 $(function() {
        $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });
    	
	//JS for Active Class in menu
	
	$("nav ul li").click(function(){
		  $(this).addClass("active");
			$(this).siblings().removeClass("active");
			
	});
	//Js For Hover class for Effect 3
  $(".figure3").hover(
  function(){
		$(this).find(".service-img").addClass("animated fadeInLeft");
		$(this).find(".service-cont").addClass("animated fadeInRight");
	},
	function(){
		$(this).find(".service-img").removeClass("animated fadeInLeft");
		$(this).find(".service-cont").removeClass("animated fadeInRight");
	}
  );
 
});