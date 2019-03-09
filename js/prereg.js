function shirtSelect(el) {
	
	var innerDiv = $(el).siblings();
	if (el.checked){
		innerDiv.css("display", "block");
		var innerInputs = $(innerDiv).children();
		innerInputs[0].checked = true;
	} else {
		innerDiv.css("display", "none");
		var innerInputs = $(innerDiv).children();
		for (var i=0, len = innerInputs.length; i < len; i++) {
			innerInputs[i].checked = false;
		}
	}
}
 
function toggleUIUC(student)	{

	var cbs = document.getElementById('venue-fees').getElementsByTagName('input');
	if (student.checked){
		for (var i = 0, len = cbs.length; i<len; i++) {
			if ( cbs[i].type === 'checkbox') {
				cbs[i].value = 0;
			}
		}
		$('#venue-toggle').css("display", "none");
		document.getElementById('venue-toggle').getElementsByTagName('input')[0].checked = false;
		document.getElementById('venue-toggle').getElementsByTagName('input')[1].checked = false;
	} else {
		var costSpread = [10,10,5,5,8];
		for (var i = 0, len = cbs.length; i<len; i++) {
			if ( cbs[i].type === 'checkbox') {
				cbs[i].value = costSpread[i];
			}
		}
		$('#venue-toggle').css("display", "block");
		document.getElementById('venue-toggle').getElementsByTagName('input')[0].checked = true;
	}
}
 
function sendQuery() {
	if (document.getElementById('name').value.length == 0){
		window.alert("Please enter your name");
	} else {
		$.ajax({
			type: "GET",
			url: "https://script.google.com/macros/s/AKfycbzaJcuiVokuxAcdgmw1HX0sb00-xvA8zKZHxIyEEOebUt42Xxg/exec",
			data: $("#rip-11-form").serialize(),
			dataType: "json"
		}).done(function(){
			window.location.href = "http://rip.ddrillini.club/entry-fee-calculator/payment.html?total="+document.getElementById('total').value;
			//window.location.href = "payment.html?total="+document.getElementById('total').value;
		});
	}
}

function updateCosts(form) {
	var totalCost = 0;
	for(var i=0; i < form.elements.length; i++){
		var e = form.elements[i];
		if ($(e).is(":checkbox") || $(e).is(":radio")){
			if (e.checked && e.value % 1 === 0 ){
				totalCost += parseInt(e.value);
			}
		}
	}
	document.getElementById('totalCost').innerHTML="Your total cost comes out to: $"+totalCost;
	document.getElementById('total').value=totalCost;
	console.log(totalCost);
}