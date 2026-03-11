<script lang="ts">
	import Meta from '../../../components/layout/Meta.svelte';
	import Link from '../../../components/Link.svelte';
</script>

<svelte:head>
  <Meta title="Getting Around" desc='Local transportation and rideshare information at Rumble in the Prairie.' noindex={false}/>
</svelte:head>

<div class="content">
  <h1>Getting Around</h1>

  <h2 id="mtd">Public Transit via MTD</h2>
  <p>The public transit system is great! Here's the basics.</p>

  <h3>How do I tell which bus is which?</h3>
  <p>Routes have an associated number, direction, and color. For example, the 5W Green or 13N Silver.</p>

  <h3>When do buses change schedules/frequency?</h3>
  <p>Routes in general run less frequently when the university is not in session, which will usually include when RIP is held. Nighttime and weekend routes run less frequently than weekday routes and have an added "0" to the number. For example, the 50W Green or 130N Silver (the only exception to this rule is the 1N/S Yellow becomes 100N/S Yellow because there's the 10E/W Gold that runs during weekdays).</p>

  <h3>How can I tell when my bus is arriving?</h3>
  <p>MTD recently integrated with Google Maps for real-time updates. Bus stops also have a stop code that you can text to <Link title="35890" href="tel:35890"/> to get updates. The Transit App (<Link title="Apple Store" external href="https://apps.apple.com/us/app/transit-subway-bus-times/id498151501"/> | <Link title="Google Play" external href="https://play.google.com/store/apps/details?id=com.thetransitapp.droid&hl=en_US&gl=US"/>) is also popular, and the <Link title="MTD Website" external href="https://mtd.org/maps-and-schedules/bus-stops/"/> also has a stop lookup feature (under "Designated Stops").</p>

  <p class="comment">Note: Sometimes a bus will randomly disappear from real-time updates when it's &lt;5 minutes away from a stop. For example, Google might tell you the next bus is 20 minutes away instead, when a just a little earlier, it said the next bus was 3 minutes away. In this situation, it's worth assuming you did <i>not</i> miss the bus, so stick around for a few minutes.</p>

  <h3>How much does it cost to take the bus?</h3>
  <p>Bus fares are $1 one-way and includes one transfer (ask the driver for a transfer slip when boarding). Pay with cash or use the <Link title="Token Transit" external href="https://mtd.org/riding/token-transit/"/>app. <i>However</i>, all bus stops near or on campus (and a few further out) are free! Look for an orange bus stop sign or signage saying "This is an iStop." At these stops, you can board from any (open) door on the bus. See MTD's <Link title="iStop Map" external href="https://mtd.org/media/3580/istop-map.png"/> for the locations of these stops.</p>

  <h2 id="rideshare">Uber/Lyft</h2>
  <p>We do have Uber and Lyft service in the area. Uber tends to be more readily available than Lyft.</p>

  <h2 id="rental">Car Rental</h2>
  <p><Link title="Enterprise" external href="https://www.enterprise.com/en/car-rental-locations/us/il/champaign-n-prospect-ave-6201.html"/> and <Link title="Hertz" external href="https://www.hertz.com/rentacar/location/unitedstates/illinois/champaign/CMIC02"/> have locations in the northwest side of Champaign. We also have a few <Link title="Zipcars" external href="https://my.zipcar.com/search"/> around town. Apparently the local <Link title="Nissan Dealer" external href="https://www.illininissan.com/rentals/"/> also offers rentals.</p>

  <h2 id="parking">Parking on or near campus</h2>
  <p>Parking on-campus is a pain. Many areas around campus use meters. For parking meters, you can pay in cash or use the <Link title="Mobile Meter" external href="https://mobilemeter.ppprk.com/park/"/> app (also available via <Link title="App Store" external href="https://apps.apple.com/us/app/mobilemeter/id948398747"/> | <Link title="Google Play" external href="https://play.google.com/store/apps/details?id=com.passportparking.mobile.mobilemeter&hl=en_US&gl=US"/>). The City of Champaign has a very detailed and interactive <Link title="map" external href="https://cityofchampaign.maps.arcgis.com/apps/webappviewer/index.html?id=7525441df3664018bebe847837450c6a"/> of where parking meters are located, how much they cost, how long you can park, etc. but this is only helpful for the campustown area directly west of campus. <b>Note:</b> Metered parking in this area is free on Sundays (see <Link title="University District Visitor Parking" external href="https://champaignil.gov/public-works/parking/visitor-parking/"/> for more details). Additionally, the meters on Matthews Ave (directly east of the union) are free on Sundays.</p>
  <p>Many university parking lots require parking permits during regular business hours. On weekdays, many university parking lots become free after 5 PM. The following lots offer metered parking (listed by closest to furthest): D10, B3, C3, C7, B15, E3, D12, D20. On weekends, the following lots are free and &lt;15 minutes walking from Illini Union (listed by closest to furthest): D6, B1, C9, D9, B4, B17. On weekends, the following lots are free and within a few free bus stops: F29, F28, E14, F23. See UIUC's <Link title="Campus Parking Map" external href="https://www.parking.illinois.edu/sites/default/files/inline-files/parking-map-pdf.pdf"/> for more details.</p>

  <h2 id="parking-off">Parking off-campus</h2>
  <p>The residential Urbana area directly east of campus has lots of free street parking. Just be wary as some streets only allow parking on one side. Downside is you'll obviously need to walk farther to Illini Union. If you park close to Lincoln Ave, you may be able catch the 22N or 220N Illini for a few free stops. If you park close to Green Street further down the Urbana side, you may be able to catch the 5W or 50W Green (but you'll have to pay the fare to get to Illini Union). If you park close to Springfield Ave. further down the Urbana side, you may be able to catch the 13S or 130S Silver (but you'll have to pay the fare to get to Illini Union).</p>
  <p>On weekends, parking is free in both downtown <Link title="Champaign" external href="https://champaignil.gov/public-works/parking/visitor-parking/"/> and <Link title="Urbana" external href="https://urbanaillinois.us/residents/parking/parking-lot-locations"/>, with easy access to buses that'll take you to Illini Union (but you'll have to pay the fare).</p>

  <h2>More travel information</h2>
  <ul>
    <li><Link title="Venue info" href="/venue"/></li>
    <li><Link title="Hotels + lodging" href="/lodging"/></li>
    <li><Link title="Local eateries" href="/food"/></li>
  </ul>

</div>