$(document).ready(function(){
	
	//--------------------------------- Tabs section setup  --------------------------------//
	
		$("#wrapper").easytabs({
    	animate			: true,
    	updateHash		: false,
    	transitionIn	:'slideDown',
    	transitionOut	:'slideUp',
    	animationSpeed	:600,
		tabActiveClass	:'active',
		tabs            :" #mainNav > ul > li",
		transitionInEasing: 'easeInCirc',
	  	transitionOutEasing: 'easeOutCirc'
    
    });
	
	$('.trigger').click( function() {
		 var tab = $(this).prop("id");
 		 $('#wrapper').easytabs('select', tab);
	});
	//--------------------------------- End tabs section setup --------------------------------//
	

	// Hover animation for the elements of the portfolio

	$(".portfolio a").hover( function(){ 
		$(this).children("img").animate({ opacity: 0.55 }, "fast"); 
	}, function(){ 
		$(this).children("img").animate({ opacity: 1.0 }, "slow"); 
	}); 
	
	//--------End hover animation for the elements of the portfolio ----------------//
	
	
	//----------End initilaizing prettyPhoto for the clicked elements of the portfolio ----------//
	
	$(".portfolio a[data-type^='prettyPhoto']").prettyPhoto({
		theme:'light_square', 
		autoplay_slideshow: false, 
		overlay_gallery: false, 
		show_title: false
	});
	
	//------- End initilaizing prettyPhoto for the clicked elements of the portfolio  ---------//
	
	
	//--------- Sorting portfolio elements with quicksand plugin  ---------------//
	var $portfolioClone = $(".portfolio").clone(true);
	
	$(".filter a").click(function(e){
		$(".filter li").removeClass("current");	
		var $filterClass = $(this).parent().attr("class");
		if ( $filterClass == "all" ) {
			var $filteredPortfolio = $portfolioClone.find("li");
		} else {
			var $filteredPortfolio = $portfolioClone.find("li[data-type~=" + $filterClass + "]");
		}
		$(".portfolio").quicksand( $filteredPortfolio, { 
			duration: 800,
			easing: 'easeInOutQuad' 
		}, function(){		
				// mini content hover animation
				$('#items .mini-content').each(function (i) {
					var me = $(this),
						artcon = me.find('.article-container'),
						minshadow = me.find('.mini-shadow');
						
						me.hover(function(e) {
									artcon.hoverFlow('mouseenter', { top: -15 }, 'fast');
									}, function(e) {
									artcon.hoverFlow('mouseleave', { top: 0 }, 'fast');
						});
						
						me.hover(function(e) {
									minshadow.hoverFlow('mouseenter', { width: '85%', opacity:0.5 }, 'fast');
									}, function(e) {
									minshadow.hoverFlow('mouseleave', { width: '100%', opacity:1 }, 'fast');
						});
				});
				
				$(".portfolio a").hover( function(){ 
					$(this).children("img").animate({ opacity: 0.55 }, "fast"); 
					}, function(){ 
				$(this).children("img").animate({ opacity: 1.0 }, "slow"); 
						
			});
			 
//--------- Reinitilaizing prettyPhoto for the new cloned elements of the portfolio -------------------//
			
			$(".portfolio a[data-type^='prettyPhoto']").prettyPhoto({
				theme:'light_square', 
				autoplay_slideshow: false, 
				overlay_gallery: false, 
				show_title: false
			});
			
//------------ End reinitilaizing prettyPhoto for the new cloned elements of the portfolio ---------------//
			
		});


		$(this).parent().addClass("current");
		e.preventDefault();
	});
	
//--------- End sorting portfolio elements with quicksand plugin ----------//


//----------- Pattern switcher ---------------//

$('.switcher').click(
		function() {
			var pattNumb = $(this).attr("data-id");
			$('body').css("background-image","url(images/pattern/"+pattNumb+".png)");
		});
   
       
//-------------------------- End pattern switcher --------------------------------//


// ----------------------------- Tooltip for the map image ---------------------------------//

$('#googlemap').poshytip({
	className: 'tooltip',
	showTimeout: 1,
	alignTo: 'target',
	alignX: 'right',
	offsetY: 15,
	allowTipHover: false
});

// ----------------------------- Tooltip for the map image ---------------------------------//


//--------------------------- Prettyphoto for the click on the map image ----------------------------//

	$("#contactInfo a[data-type^='prettyPhoto']").prettyPhoto({
		theme:'light_square', 
		autoplay_slideshow: false, 
		overlay_gallery: false, 
		show_title: false,
		show_navigation:false
	});
//--------------------------- End prettyphoto for the click on the map image ----------------------------//


//--------------------------- Form validation  ----------------------------//
$(".contactForm").validate();
//--------------------------- End form validation ----------------------------//

});
