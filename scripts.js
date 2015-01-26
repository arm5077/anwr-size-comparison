$(document).ready(function(){
	
	var map = L.map('map').setView([38.8951, -77.0367], 13);

	L.tileLayer('http://{s}.tiles.mapbox.com/v3/arm5077.jbndckj9/{z}/{x}/{y}.png', {
	    maxZoom: 18,
		minZoom: 7
	}).addTo(map);

	var drillCircle = L.circle([0,0], 43957, {
	    color: '#FAA61A',
	    fillColor: '#FDD300',
	    fillOpacity: 0.5
	}).addTo(map);


	var anwrCircle = L.circle([0,0], 157620, {
	    color: '#2B7064',
	    fillColor: '#62998F',
	    fillOpacity: 0.2
	}).addTo(map);	
	
	$(".dialogue").css({
		left: ($("html").outerWidth() - $(".dialogue").outerWidth()) / 2,
		top: ($("html").outerHeight() - $(".dialogue").outerHeight()) / 2 
	});
	
	$("#submit").click(function(){
		if( $("#zip").val() ){
			
			$("#submit").addClass("inactive");
			$("#submit").text("Searching");
			
			$.getJSON("https://nominatim.openstreetmap.org/search/" + $("#zip").val() + "?format=json&limit=1&countrycode=us", function(data){
				if( data != "" ) {
					console.log(data);
					map.setView([data[0].lat, data[0].lon], 8);
					drillCircle.setLatLng([data[0].lat, data[0].lon]);
					anwrCircle.setLatLng([data[0].lat, data[0].lon]);
					$(".dialogue").fadeOut(150);
					$(".explainer").css("right", 0);
				}
				else {
					alert("Couldn't find zip code");	
				}
				
				$("#zip").val("");
				$("#submit").text("Submit");
				$("#submit").removeClass("inactive");
								
			});
			
		} 
		else {
			alert("Enter a zip code");
			
		}
		
	});
	
	$("#again").click(function(){
		$(".explainer").css("right", "-100%");
		$(".dialogue").fadeIn(150);
	});
	
	
});

