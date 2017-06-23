eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('$(q).p(2(){$(\'.h\').h({r:"s",o:g,u:g,n:l})});$(\'.f-m\').t(2(i){A 3=$(C),7=3.d(\'.B-y\'),8=3.d(\'.f-v\');3.9(2(e){7.4(\'a\',{c:-z},\'6\')},2(e){7.4(\'k\',{c:0},\'6\')});3.9(2(e){8.4(\'a\',{j:\'w%\',b:0.5},\'6\')},2(e){8.4(\'k\',{j:\'x%\',b:1},\'6\')})});',39,39,'||function|me|hoverFlow||fast|artcon|minshadow|hover|mouseenter|opacity|top|find||mini|false|flexslider||width|mouseleave|3000|content|slideshowSpeed|controlNav|load|window|animation|fade|each|directionNav|shadow|85|100|container|15|var|article|this'.split('|')))

 
 
 
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