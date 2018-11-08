var previous_state_stack = [];
var cards = document.getElementById("card-area")
var banners = [ "99plus-bn.png", "Aceshaped-bn.png", "Arcana-bn.png", "Bass Weapon LAZERFLAME-bn.png", "Beyond The Power-bn.png", "Chatterbox-bn.png", "Colltorn-bn.png", "DD-bn.png", "Deceptive-bn.png", "GATE bn.png", "Glacier-bn.png", "Glitchtastic-bn.png", "Heard Right-bn.png", "Heart Beat Formula-bn.png", "I Hold Still-bn.png", "Kirby Smash - bn.png", "Like a Lady-bn.png", "Marionette-bn.png", "Mind Eruption-bn.png", "Mr. Toot-bn.png", "Oboro (dj TAKA Remix)-bn.png", "Papipopepipupepa-bn.png", "QUAKE-bn.png", "Quick Attack!-bn.png", "RocketLanterns-bn.png", "Seedy Try-bn.png", "TGB-bn.png", "Time For Tea-bn.png", "With You-bn.png", "acidburst-bn.png", "binary-bn.png", "blue-bn.png", "boombayah bn.png", "candy-bn.png", "capitalism-cannon-bn.png", "cosmiccat-bn.png", "debug-bn.png", "drunkenstein-bn.png", "elevatia-bn.png", "holic-bn.png", "iamchris4-bn.png", "idwk-bn.png", "mtpdd-bn.png", "non-fiction world-bn.png", "prof-bn.png", "static-state-bn.png", "swamp bn.png", "technoid-bn.png", "thesettingsun-bn.png", "your-beautiful-bn.png" ]
var current_position = -1;

function draw(number)
{
    if (current_position < previous_state_stack.length)
    	previous_state_stack.length = current_position + 1

	random_number_array = randomize(number)
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
    var random_number_array = [];

    // for a total of numRequested times
	for (var i = 0; i < numRequested; i++) {

        // generate a random number
   		x = Math.floor(Math.random() * banners.length);

        // catch duplicates
        if(random_number_array.indexOf(x) >= 0)
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
	console.log(cardArray)
	console.log(current_position)
	console.log(previous_state_stack)
	if(cardArray === null)
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
            if (img.style.opacity == .2)
                img.style.opacity = 1
            else
                img.style.opacity = .2
        })
        // img.style.opacity = '.2'

        cards.appendChild(img)
	}
}