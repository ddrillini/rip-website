'use strict';

var discord_webhook_url = "https://dis"+"corda"+"pp.com/api/webho"+"oks/51087618717882"+'7786/zBNpG-Db'+'lnHLqfaHt8'+'mI1gPZfKr0wEZ5p6MIr'+'Z1fZ'+'RJRz8jFYv'+"1IwqNIfdH5xIY-w_Ud"; // so bots don't scrape it

var previous_state_stack = [];
var cards = document.getElementById("card-area")

var banners = [
	'99plus.png','Aceshaped.png','acidburst.png','Arcana.png','Bass Weapon LAZERFLAME.png','BeyondThePower.png','binary.png','blue.png','boombayah.png','candy.png','capitalism-cannon.png','Chatterbox.png','Colltorn.png','cosmiccat.png','DD.png','debug.png','deceptive.png','drunkenstein.png','elevatia.png','gargoyle.png','GATE.png','Glacier.png','Glitchtastic.png','Heard-Right.png','HeartBeatFormula.png','holic.png','idwk.png','I-Hold-Still.png','KirbySmash.png','Like-a-Lady.png','Marionette.png','Mind-Eruption.png','Mr-Toot.png','mtpdd.png','non-fiction-world.png','Oboro-dj-TAKA-Remix.png','Papipopepipupepa.png','prof.png','QUAKE.png','Quick-Attack.png','Rocket-Lanterns.png','Seedy-Try.png','static-state.png','swamp.png','technoid.png','TGB.png','thesettingsun.png','Time-For-Tea.png','With-You.png','your-beautiful.png'
]

var opacity = 0.2

var current_position = -1;

function draw(number)
{
	if (current_position < previous_state_stack.length)
		previous_state_stack.length = current_position + 1

	let random_number_array = randomize(number)
	previous_state_stack.push(random_number_array)
	current_position++
	render(random_number_array)
}

function fuck_go_back()
{
if(current_position >0)
	current_position--

	render(previous_state_stack[current_position])
}

function fuck_go_forward()
{
	if(current_position < previous_state_stack.length - 1)
	current_position++

	render(previous_state_stack[current_position])
}

function randomize(numRequested)
{
	let random_number_array = [];

	// for a total of numRequested times
	for (let i = 0; i < numRequested; i++) {

		// generate a random number
		let x = Math.floor(Math.random() * banners.length);

		// catch duplicates
		if (random_number_array.indexOf(x) >= 0)
		{
			i = i-1;
			continue
		}
		
		random_number_array.push(x)
	}

	// now the array contains a lot of random numbers
	return random_number_array 
}

function render(cardArray)
{
	if (cardArray === null)
		return
	
	// remove the old ones
	while (cards.firstChild) {
		cards.removeChild(cards.firstChild);
	}
	
	for (var i=0; i < cardArray.length; i++) {
		let img = document.createElement('img')
		img.src="banners/" + banners[cardArray[i]]
		img.width='418'
		img.height='164'
		img.addEventListener("click", function() {
		if (img.style.opacity == opacity)
			img.style.opacity = 1
		else
			img.style.opacity = opacity
		})
		cards.appendChild(img)
	}
}

function webhook()
{
	if (current_position < 0) {
		alert('fuck there\'s nothing here');
	}
	
	let the_picks = previous_state_stack[current_position];
	let card_array = cards.childNodes;
	
	let result = []
	
	for (var i=0; i < card_array.length; i++) {
		let curr = card_array[i]
		let status = true
		if (curr.style.opacity === (opacity.toString())) {
			status = false
		}
		
		if (status) {
			console.log(banners[the_picks[i]])
			result.push(banners[the_picks[i]])
		}
	}
	
	result = result.join(', ')
	
	let httpRequest = new XMLHttpRequest();
	httpRequest.open('POST', discord_webhook_url, true);
	httpRequest.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
	
	let the_body = 'pool picks: ' + result + '\nAnnyeong!!!! owo wwwww~~~~~'
	console.log(the_body)
	
	httpRequest.send(JSON.stringify({ 'content': the_body} ));
	
}
