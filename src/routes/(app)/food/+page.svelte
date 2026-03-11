<script lang="ts">
	import Meta from '../../../components/layout/Meta.svelte';
	import Food from '../../../components/Food.svelte';
  import Link from '../../../components/Link.svelte';
</script>

<svelte:head>
  <Meta title="Food" desc='Local food and eatery information at Rumble in the Prairie.' noindex={false}/>
</svelte:head>

<div class="content">
  <h1>Food</h1>
  <p>We have an amazing food scene in Champaign-Urbana! In this list, restaurants are grouped by location (from nearest to farthest) with transportation options. This list is not exhaustive but is intended to highlight local businesses (that are typically open on weekends). There should be plenty of options for your stay during RIP. See the <a href="getting-around">Getting Around</a> page for more details on local transportation options.</p>

  <h2>Campustown / Green Street</h2>
  <p class="comment">5-15 minute walk or 2-4 stops on the 5W/50W Green bus</p>
  <div class="entry-list">
    <Food title="Mia Za's"                   gmaps="b2ZuveoUUoSi6DBW9"  desc="Customizable pizza, pasta, and sandwiches."/>
    <Food title="Shawarma Joint"             gmaps="7yauFt4sjGD2gLLp7"  desc="Chipotle but Middle Eastern. One build your own bowl is easily two meals. They have a second location near downtown Urbana."/>
    <Food title="Midsummer Lounge"           gmaps="Wg6o5jbC4yKtbGUa6"  desc="Chinese-style noodles. Soup noodles are amazing on a cold day. Don't sleep on the dumplings."/>
    <Food title="Cracked the Egg Came First" gmaps="Jn9YjVs2ABToqAn3A"  desc="Creative take on breakfast sandwiches and burritos among other breakfast classics."/>
    <Food title="Dee-Dee's Beef"             gmaps="5tsNrGKC1FBxtZNz6"  desc="Really good Italian beef and arancini. Only open evenings Thursdays to Saturdays."/>
    <Food title="Teamoji"                    gmaps="HVat2E7gjJNkajp69"  desc="Boba shop that also has really good Korean corn dogs, Korean egg toasts, and mochi donuts."/>
    <Food title="Cocomero"                   gmaps="n6hCyFVsTENE7CfeA"  desc="Self-serve frozen yogurt, waffles, and bungeoppang/taiyaki."/>
    <Food title="Cravings"                   gmaps="bnP8kSn59jEYbaFq8"  desc="Chinese fast food. Great value for money. Closed Sundays."/>
    <Food title="Spoon House Korean Kitchen" gmaps="p3farE2UxTRH8BKZ8"  desc="Classic Korean dishes with some Korean-Mexican fusion options."/>
    <Food title="Latea Bubble Tea Lounge"    gmaps="oZ1wnZ7NX52nqf3VA"  desc="Great boba and good non-caffeinated options too. Boba is made fresh in-house every day."/>
    <Food title="Poke Lab"                   gmaps="mLmurA1Fyechu4YeA"  desc="Build your own poke bowls."/>
    <Food title="GG Bowl"                    gmaps="avBeHna37u7YPP9EA"  desc="Build your own Mala Tang (like spicy hotpot, but in a bowl) and Mala Xiangguo (like spicy hotpot, but without soup). Better to go with a group."/>
    <Food title="Paris Super Crepes"         gmaps="F8T5JUHmMGFxeYWf8"  desc="Sweet and savory crepes and other snack items."/>
    <Food title="Szechuan Taste"             gmaps="JyzLWYL6YtuvYqvY8"  desc="Chinese restaurant with mostly Szechuan-style dishes but also Peking duck? Better to go with a group."/>
    <Food title="Evo Cafe"                   gmaps="3gidNCrtPJxQHBDz8"  desc="Really good Sichuan/Chengdu-style food. Expect (numbing) spice. Better to go with a group."/>
    <Food title="Asian Taste"                gmaps="TfkZyVtqcJrTFNxM9"  desc="Smaller Chinese cafe. Really good Jammy Fan Chicken (Huangmenji) and popcorn chicken. Closed Sundays."/>
    <Food title="Fat Sandwich Company"       gmaps="LwQ2jGHWrsaKRzXS8"  desc="As the name implies, fat sandwiches. Maybe not the best right before a round..."/>
    <Food title="Signature Grill"            gmaps="C58E9u6nDBej4iVY6"  desc="Skip the Chipotle-style options. Great dosas, samosas, Indian street food, and rotating specials."/>
    <Food title="Bangkok Thai / Pho 911"     gmaps="jyyBiiUgnyQhwfck8"  desc="Classic Thai dishes and pho. Great value for money."/>
    <Food title="Brewlab"                    gmaps="zjPG7TbTXGmDtyh6A"  desc="Local hip coffee shop."/>
    <Food title="Sakanaya"                   gmaps="5urY948FFc3AehEi7"  desc="Sit-down sushi restaurant. Typically long lines but you can join their Yelp waitlist in advance. Typically only open for dinner, but also has lunch hours on Friday and Saturday."/>
    <Food title="Northern Cuisine"           gmaps="owT22w2tZYK1TMvv9"  desc="Amazing Chinese food from the northeastern (Dongbei) region. Better to go with a group."/>
    <Food title="Jurassic Grill"             gmaps="tqwFGJvcVuMNkozx7"  desc="Typical burger joint with a hidden empanada menu."/>
    <Food title="Sushi Man"                  gmaps="qM7SME3uc1y2k2tW6"  desc="Good sushi restaurant. Better for takeout as there's not as much seating. Their second location in northwest Champaign has an all-you-can-eat option."/>
    <Food title="Naya Indian Cuisine"        gmaps="1vUjDmanwRk8onBX6"  desc="Really good northern style Indian food."/>
    <Food title="Moment Bakery"              gmaps="RdHRag2qA5TzFNpC9"  desc="Chinese-style bakery with amazing pastries, breads, and cakes. Closed Sundays."/>
  </div>

  <h2>South of Campus</h2>
  <p class="comment">10 minute walk</p>
  <div class="entry-list">
    <Food title="The Bread Company"   gmaps="rQcBbJ3MpafXhcWS7"  desc="European-style cafe with fresh baked bread daily. Great sandwiches during weekday lunch hours and upscale pizza, pasta, and small plates weeknights and Saturday nights. Closed Sundays."/>
    <Food title="Manolo's"            gmaps="NA1v632HFxyQTVWk6"  desc="New York style pizza by the slice and empanadas (both sweet and savory). Better for takeout as there's not much seating. Closed Sundays."/>
    <Food title="Dubai Grill"         gmaps="ZGnAD4hCnTRFpdfy9"  desc="Like Shawarma Joint."/>
    <Food title="Basil Thai"          gmaps="KQ4KRNHwbYNAX153A"  desc="Classic Thai dishes including pad kra pow. Closed Sundays."/>
    <Food title="Bab Plus"            gmaps="CzEn7pMxd7xnrhwk9"  desc="Classic Korean food. Closed Sundays."/>
    <Food title="Caffe Paradiso"      gmaps="WicJ2dGBHyAren7z5"  desc="Sandwiches, coffee, and desserts. Obama visited once."/>
  </div>

  <h2>Downtown Urbana (east)</h2>
  <p class="comment">A few stops on 10E Gold (weekdays only), 5E/50E Green, 13N/130N Silver, or 5 minutes drive</p>
  <div class="entry-list">
    <!--<Food title="Courier Cafe"        gmaps="fSqFsfBPwimKH4zGA" desc="Classic American diner with meals made from scratch daily."/>-->
    <Food title="Rick's Bakery"       gmaps="NCJ5gBFkYU6x8Wwj7"  desc="Local bakery selling freshly made breads, pastries, and sweets. Also has some lunch offerings including burritos and tamales. Closed Sundays."/>
    <Food title="Siam Terrace"        gmaps="Bap8umdcHapyv7hW7"  desc="Thai classics. Checkout their specials menu."/>
    <Food title="El Paraiso"          gmaps="k2Uan9pYZuAgFett8"  desc="Latin American food including dishes like Mofongo, Jibarito, and pupusas. Closed Sundays."/>
    <Food title="The Main Scoop"      gmaps="4DpvfGwL8LLh3xbc6"  desc="Local ice cream shop with classic and creative flavors."/>
    <Food title="Encanto"             gmaps="nXsg7PpP2RB3jRWw6"  desc="Mexican restaurant with a few Peruvian classics like Lomo Saltado. Good value for money."/>
    <Food title="Masijta Grill"       gmaps="QDog7LfSCssh9KBU9"  desc="Classic Korean dishes, and they have KBBQ!"/>
    <Food title="Baldarotta's"        gmaps="x3w7XbcvubPxxWW27"  desc="Porketta sandwiches. Don't sleep on the fries (and add malt vinegar). On weekends, only open for lunch."/>
    <Food title="Xinh Xinh Cafe"      gmaps="eQE5B9icFjSUbB2r9"  desc="Great pho and summer rolls. Closed Sundays."/>
    <Food title="El Oasis"            gmaps="G87idEjUwSKoK9gH7"  desc="Mexican-style ice cream."/>
    <Food title="Panaderia Bakery"    gmaps="8nCaP82ZTSvry3vTA"  desc="Mexican-style bakery (as the name might suggest. Amazing, huge conchas and other sweet treats."/>
    <Food title="La Mixteca"          gmaps="g2zS9Y6foLW4QYSK7"  desc="Classic Mexican restaurant."/>
    <Food title="Los Paisas"          gmaps="jr8AtCYfCP8oeTmo7"  desc="Great birria tacos."/>
    <Food title="Huaraches Moroleon"  gmaps="pzHjhzZ5kBzDCPJJ9"  desc="Local favorite for Mexican food, but farther from downtown Urbana."/>
  </div>

  <h2>Downtown Champaign (west)</h2>
  <p class="comment">A few stops on 5W/50W Green, 12W/120W Teal, 1N/100N Yellow, or 2N/20N Red, or &lt;10 minutes drive</p>
  <div class="entry-list">
    <Food title="Pizzeria Antica"         gmaps="E3hJQws38FkrpMie7"  desc="Upscale pizza certified authentic by the City of Naples. Closed Sundays."/>
    <Food title="Maize Mexican Grill"     gmaps="QXBNq5SdeuU7dudv8"  desc="Solid street tacos, burritos, and other Mexican classics."/>
    <Food title="Nando Milano"            gmaps="ssZEGVBhMzcj4Hns5"  desc="Fancy Italian. On weekends, open for late lunch and dinner."/>
    <Food title="Neil St. Blues"          gmaps="ywenAVzmCAhSz1V8A"  desc="Soul food and a few classic Cajun/Creole options."/>
    <Food title="Watson's Shack and Rail" gmaps="qyapPcyFjRu8J1pAA"  desc="Great local fried chicken restaurant. Offers brunch on Sundays."/>
    <Food title="The Space"               gmaps="icBa8yMGwzXWgCmQ9"  desc="Really good smash burgers. Also a small music and local events venue (including a Mario Kart tournament on Thursdays) as well as hot sauce shop. Only open for dinner and closed Sundays."/>
    <Food title="Black Dog"               gmaps="EcFz639726dPPMAGA"  desc="Local BBQ joint."/>
    <Food title="Smith Burger Company"    gmaps="ZNLTmSVLdSGsdGPK8"  desc="Really good smash burgers. Located in Collective Pour. Closed Sundays."/>
    <Food title="Jupiter's Pizzeria"      gmaps="poAxGW4kY5RZHvYp7"  desc="Crispy thin crust pizza."/>
    <Food title="La Bahia"                gmaps="gQVZKwRWZHwaw4ab8"  desc="Mexican-style seafood."/>
    <Food title="Stango Cuisine"          gmaps="UsKHUrpNwCsAxD3E8"  desc="Proudly the only Zambian restaurant in North America. Closed Sundays."/>
    <Food title="Tasty Tart"              gmaps="FUJMPacqCTPfbxrv5"  desc="Amazing individual-sized shortcrust pastries. They close when they sell out!"/>
    <Food title="Pekara"                  gmaps="Ab12KvZsDDkHw5W16"  desc="Cafe serving classic breakfast and lunch items with pastries made fresh daily."/>
  </div>

  <h2>Neil Street (southwest)</h2>
  <p class="comment">A few stops on 1S/100S Yellow, or 10 minutes drive</p>
  <div class="entry-list">
    <Food title="Lanxang Thai-Lao Cuisine"  gmaps="rLk9SrgTV43ycQN9A"  desc="Thai classics. Closed Sundays."/>
    <Food title="Papa Del's Pizza Factory"  gmaps="sXmZfiRx9XvAmh876"  desc="Massive deep dish pizza and other classic Italian options. Order in advance or be prepared to wait 45+ minutes for your order!"/>
    <Food title="Ishi & Kaori's Oven"       gmaps="kkvmBGBDTc1f4qjH7"  desc="Affordable and really good quality omakase (call in advance for availability) and amazing Japanese-style cakes and pastries (weekdays or order ahead for pickup)."/>
    <Food title="Merry Ann's Diner"         gmaps="U56ZDzrQgzDoJoo56"  desc="Classic American diner fare with affordable breakfast, open 24/7. Great after a wild night at AHYD."/>
    <Food title="Jarling's Custard Cup"     gmaps="Xui2jKsfXbz16zxj6"  desc="Local favorite for frozen custard and concrete mixers."/>
  </div>

  <h2>Far from campus</h2>
  <p class="comment">&lt;15 minutes drive</p>
  <div class="entry-list">
    <Food title="Cheese and Crackers"             gmaps="LJJNhefUG1FgS4Xx7"  desc="Cheese, crackers, European-style deli, and sushi-quality fish (some assembly required). Really good sandwiches. Closed Sundays."/>
    <Food title="Sun Singer"                      gmaps="NZv3kD9eBQMnFByM9"  desc="Sitdown New American restaurant, also popular for brunch."/>
    <Food title="Eighty-Three Vietnamese Cuisine" gmaps="Nfox6cw1cYaYszLp8"  desc="Vietnamese classics including pho and banh mi. Closed Sundays."/>
    <Food title="San Maru"                        gmaps="MW5UgFway8TLShRG6"  desc="Best Korean-style food in town. Soups are great on a cold day. Closed Sundays."/>
    <Food title="Mo's Burritos"                   gmaps="aULopGBxZo111K9G8"  desc="Classic street tacos in a classic taco truck."/>
    <Food title="Los Hidalguense Taco Truck"      gmaps="CPQaQ3S96uxcLRbb9"  desc="Amazing al pastor tacos."/>
  </div>

  <h2>More travel information</h2>
  <ul>
    <li><Link title="Venue info" href="venue"/></li>
    <li><Link title="Hotels + lodging" href="/lodging"/></li>
    <li><Link title="Getting around" href="/getting-around"/></li>
  </ul>

</div>