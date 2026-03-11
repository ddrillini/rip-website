<script lang="ts">
	import Meta from '../../../components/layout/Meta.svelte';
	import Link from '../../../components/Link.svelte';
</script>

<svelte:head>
  <Meta title="Venue Info" desc='Venue and travel information for Rumble in the Prairie.' noindex={false}/>
</svelte:head>

<div class="content">
  <h1>Venue Info</h1>

  <p>Rumble in the Prairie will be held in the <b>Illini Union Ballroom</b>, on the <b>2nd floor of the Illini Union</b>:</p>

  <p><b>Illini Union, 1401 W Green St<br>Urbana, IL 61801, USA</b></p>

  <iframe title="Google Maps - Illini Union" width="100%" height="300" loading="lazy"
    referrerpolicy="no-referrer-when-downgrade"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3051.4343308860225!2d-88.22933252355897!3d40.11032327423056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880cd0eb0df454b5%3A0xe7ba4e7c081a6483!2sIllini%20Union!5e0!3m2!1sen!2sus!4v1772951126262!5m2!1sen!2sus">
  </iframe>

  <h2>Getting to UIUC</h2>
  <p>Getting to UIUC is a time-consuming process. Here are the options, listed roughly in order of convenience and cost. Many of the options assume you will be flying into Illinois (or a neighboring state).</p>
  
  <h3>From Chicago</h3>
  <p>Flying into or traveling from Chicago has the most options to get to UIUC. There are two airports in Chicago: O'Hare International Airport (ORD) and Midway National Airport (MDW). ORD is the larger of the two and typically cheaper, but typically has longer lines for security and longer distances from security to gates because of the ongoing expansion and renovation projects. MDW is the smaller of the two and typically a bit more expensive, but much less busy than ORD and more pleasant to travel through (and has actually decent food).</p>
  <p>From the airports, there's a few options to get to Champaign:</p>
  <p><Link title="Peoria Charter" external href="https://peoriacharter.com/"/> &mdash; Conveniently picks you up directly from ORD ($43) or MDW ($44). Pickups from MDW are <i>much</i> less frequent. If you're staying in Chicago before/after RIP, they also have pickups from Union Station and many suburbs. See <Link title='"Find My Stop"' external href="https://peoriacharter.com/findmystop"/> for more details on pickup and drop off locations. Sometimes runs late if the bus happens to be going through Chicago during rush hour traffic.</p>
  <p><Link title="Amtrak" external href="https://www.amtrak.com/home>Amtrak"/> &mdash; Picks up from Union Station only. Take the Blue Line from ORD or Orange Line from MDW (or call Uber/Lyft). Only drops off at Illinois Terminal in downtown Champaign. Ticket prices vary and are typically higher during holidays or other busy travel periods. The train is more spacious than Peoria Charter's buses. <b><i>However,</i></b> Amtrak trains are notorious for running late (by a couple hours) and has cancelled trains. Proceed with caution.</p>
  <p><Link title="Greyhound" external href="https://www.greyhound.com/"/> &mdash; Picks up from Greyhound Bus Station near Union Station. Take the Blue Line from ORD to Clinton Station or Orange Line followed by local bus from MDW (or call Uber/Lyft). Only drops off at Illinois Terminal in Downtown Champaign. Ticket prices vary and are typically higher during holidays or other busy travel periods.</p>
  <p><Link title="Flix Bus" external href="https://www.flixbus.com/"/> &mdash; Since the Greyhound/Flix merger, Flix bus routes are available on both websites. Picks up from Greyhound Bus Station. Only drops off at a Circle K gas station in the northwest corner of Champaign. Ticket prices vary and are typically higher during holidays or other busy travel periods. <b>Note:</b> You will have to Uber/Lyft to the Champaign pickup/drop-off location since it is beyond where local transit can take you.</p>
  <p><b>Rental Car</b> &mdash; Rent a car from the company of your choice. Driving to UIUC from Chicago takes around 3 hours on average (and depends on traffic). See our <Link title="Parking" href="getting-around#parking"/> guide for information on parking in Champaign-Urbana. Note that you may be able to get cheaper rates by renting a car while in Champaign-Urbana.</p>
  <p><b>Carpool</b> &mdash; Many people coming to RIP travel through Chicago, so some travel plans may align! Ask around on the DDRIllini Discord to coordinate.</p>

  <h3>From Indianapolis or St. Louis</h3>
  <p>UIUC is roughly the same distance away from Chicago, St. Louis, and Indianapolis. You may choose to fly into St. Louis Lambert International Airport (STL) or Indianapolis International Airport (IND) instead. STL does have a Greyhound route from Civic Center, but it's better to rent a car from STL (and IND) given time constraints. <b>Note:</b> Indianapolis is in Eastern Time whereas Champaign-Urbana is in Central Time, so please take the time difference into account when booking travel!</p>

  <h3>Willard Airport (CMI)</h3>
  <p>Very convenient but <i>very</i> expensive airport to fly into since it's so close to UIUC. Only offers flights by American Airlines.</p>

  <h2>More travel information</h2>
  <ul>
    <li><Link title="Hotels + lodging" href="/lodging"/></li>
    <li><Link title="Getting around" href="/getting-around"/></li>
    <li><Link title="Local eateries" href="/food"/></li>
  </ul>

</div>