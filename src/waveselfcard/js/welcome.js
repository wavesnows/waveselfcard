// Can also be used with $(document).ready()
$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "fade",
	controlNav: false, 
	directionNav: false,
	slideshowSpeed: 3000
  });
});
  
  
  // mini content hover animation
$('.mini-content').each(function (i) {
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
 
 
 
// Google Map 
 
var your_latitude = -9.833449;
var your_longitude = 127.624517;

function initialize() {
  var yourplace = new google.maps.LatLng(your_latitude, your_longitude);
  var mapOptions = {
    zoom: 15,
    center: yourplace,
		scrollwheel: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  var marker = new google.maps.Marker({
      position: yourplace,
      map: map
      
  });
	
	marker.setAnimation(google.maps.Animation.BOUNCE);
}

//google.maps.event.addDomListener(window, 'load', initialize); 