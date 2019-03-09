$( document ).ready(function() {
	var vars = {};
	var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
		vars[key] = value;
	});
	$("#the_link").attr("href", "http://paypal.me/ddrillini/"+vars["total"]);
	document.getElementById("amount").innerHTML = vars["total"];
});