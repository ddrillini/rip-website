function draw(number)
{
    banners = [ "99plus-bn.png", "Aceshaped-bn.png", "Arcana-bn.png", "Bass Weapon LAZERFLAME-bn.png", "Beyond The Power-bn.png", "Chatterbox-bn.png", "Colltorn-bn.png", "DD-bn.png", "Deceptive-bn.png", "GATE bn.png", "Glacier-bn.png", "Glitchtastic-bn.png", "Heard Right-bn.png", "Heart Beat Formula-bn.png", "I Hold Still-bn.png", "Kirby Smash - bn.png", "Like a Lady-bn.png", "Marionette-bn.png", "Mind Eruption-bn.png", "Mr. Toot-bn.png", "Oboro (dj TAKA Remix)-bn.png", "Papipopepipupepa-bn.png", "QUAKE-bn.png", "Quick Attack!-bn.png", "RocketLanterns-bn.png", "Seedy Try-bn.png", "TGB-bn.png", "Time For Tea-bn.png", "With You-bn.png", "acidburst-bn.png", "binary-bn.png", "blue-bn.png", "boombayah bn.png", "candy-bn.png", "capitalism-cannon-bn.png", "cosmiccat-bn.png", "debug-bn.png", "drunkenstein-bn.png", "elevatia-bn.png", "holic-bn.png", "iamchris4-bn.png", "idwk-bn.png", "mtpdd-bn.png", "non-fiction world-bn.png", "prof-bn.png", "static-state-bn.png", "swamp bn.png", "technoid-bn.png", "thesettingsun-bn.png", "your-beautiful-bn.png" ]

    seen_numbers = []

    var cards = document.getElementById("card-area")

    // remove the old ones
    while (cards.firstChild) {
        cards.removeChild(cards.firstChild);
    }

    for (var i = 0; i < number; i++) {
        x = Math.floor(Math.random() * banners.length);
        if(seen_numbers.indexOf(x) >= 0)
        {
            // try again, bench
            i = i-1;
            continue
        }
        
        seen_numbers.push(x)

        let img = document.createElement('img')
        img.src="banners/" + banners[x]
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