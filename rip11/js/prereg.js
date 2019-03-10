function sendQuery() {
	if ($('#name').val().length == 0){
		window.alert("Please enter your name");
	} else {
		// see comment @ bottom of file on this same commit
		// $("#submit-button").one('click', function(e){
		// 	sendQuery();
		// });
		$.ajax({
			crossDomain: true,
			type: "GET",
			url: "https://script.google.com/macros/s/AKfycbzaJcuiVokuxAcdgmw1HX0sb00-xvA8zKZHxIyEEOebUt42Xxg/exec",
			data: $("#rip-11-form").serialize(),
			dataType: "json"
		}).done(function(){
			//window.location.href = "http://rip.ddrillini.club/rip11/payment.html?total="+document.getElementById('total').value;
			window.location.href = "payment.html?total="+$('#total').val();
		});
	}
}

function updateCosts() {
	const uiucVal = $('#uiuc-student').is(':checked');
	let totalCost = 0;
	const venueFee = parseInt($('input[name="venue-type-op"]:checked').val());
	let trueVenueFee;

	// venue and tournament fees
	if (uiucVal) {
		trueVenueFee = 0;
		$('.pay').hide();
		$('.exempt').show();
	} else {
		trueVenueFee = venueFee;
		$('.pay').show();
		$('.exempt').hide();
		$('.tourney').each((i, e) => {
			if ($(e).is(':checked')) {
				totalCost += parseInt($(e).val());
			}
		});
	}
	$('#venue-type').val(venueFee);
	totalCost += trueVenueFee;
	
	// merch
	$('.merch').each((i, e) => {
		if ($(e).is(':checked')) {
			totalCost += parseInt($(e).val());
		}
	});

	// donation
	const donationVal = parseFloat($('#donation-op').val());
	var trueDonationVal = 0;
	if (donationVal !== NaN && donationVal >= 0) {
		$('#donation-op').removeClass('is-error');
		trueDonationVal = parseFloat(donationVal.toFixed(2));
	} else if ($('#donation-op').val() === "") {
		$('#donation-op').removeClass('is-error');
		trueDonationVal = 0;
	} else {
		$('#donation-op').addClass('is-error');
		trueDonationVal = 0;
	}
	$('#donation').val(trueDonationVal);
	totalCost += trueDonationVal;
	
	// total up
	$('#totalCost').text(totalCost);
	$('#total').val(totalCost);
	
	// display shirt sizes
	const shirts = ['black-rip', 'white-rip', 'mod-srt'];
	for (let shirt of shirts) {
		const shirtCheck = '#' + shirt + '-shirt';
		const shirtOp = '#' + shirt + '-shirt-options';
		const shirtSize = '#' + shirt + '-size';
		const shirtSizeOp = shirt + '-size-op';
		if ($(shirtCheck).is(':checked')) {
			$(shirtOp).show();
			$(shirtSize).val($('input[name="'+shirtSizeOp+'"]:checked').val())
		} else {
			$(shirtOp).hide();
			$(shirtSize).val("");
		}
	}
}

// https://learn.jquery.com/using-jquery-core/document-ready/
// Code included inside $( document ).ready() will only run once the page Document Object Model (DOM) is ready for JavaScript code to execute.
// AKA code inside this will only run once the page is fully loaded.
$( document ).ready(function() {
	$('#rip-11-form').change(() => {updateCosts()});
	updateCosts();

	// TODO: register the click event handler for the submit button
	// I tried this, but it made the page not redirect to the next one so I"m bailing. -ian

	// via https://stackoverflow.com/a/13686694/1234621
	// $("#submit-button").one('click', function(e){
	// 	sendQuery();
	// });
});