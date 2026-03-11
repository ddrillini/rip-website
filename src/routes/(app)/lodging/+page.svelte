<script lang="ts">
  import globals from '../../../globals';
	import Meta from '../../../components/layout/Meta.svelte';
  import Link from '../../../components/Link.svelte';
</script>

<svelte:head>
  <Meta title="Food" desc='Lodging and accommodation information at Rumble in the Prairie.' noindex={false}/>
</svelte:head>

<div class="content">
  <h1>Where to stay</h1>
  
  <h2>Hotels</h2>
  <p>Event staff have curated a list of local hotels and costs on this <Link title="this spreadsheet" external href={globals.hotels}/>. The next few sections highlight hotels that have more convenient locations.</p>
  
  <h3>Illini Union Hotel</h3>
  <p>Event staff are <b>not</b> working to get a hotel room block at the <Link  title="Illini Union Hotel" external href="https://illiniunionhotel.illinois.edu/rooms-rates"/> for RIP. You are of course welcome to book a room at the venue on your own.</p>

  <h3>Hotels near iStops</h3>
  <p>The following hotels are notable for their proximity to iStops listed roughly in order of distance to Illini Union (see <Link title="Getting Around" href="/getting-around"/> for more details): <Link title="TownePlace Suites" external href="https://www.marriott.com/en-us/hotels/cmpts-towneplace-suites-champaign-urbana-campustown/overview/"/>, <Link title="Hampton Inn" external href="https://www.hilton.com/en/hotels/cmiilhx-hampton-champaign-urbana/"/>, <Link title="Yugo Guest Suites" external href="https://www.gatherguestsuites.com/"/>, <Link title="iHotel" external href="https://stayatthei.com/"/>, and the cluster of hotels on Lincoln Ave between I-74 and Bradley Ave.</p>
  
  <p class="comment"><b>Note:</b> There are also many hotels near bus stops (e.g., downtown Champaign, further down Neil St) that you will need to pay fare to get to Illini Union or walk a bit to get to a free iStop).</p>
  
  <h2>Airbnb</h2>
  <p>Some students and townies living near campus list their apartments or extra bedroom(s) on Airbnb.</p>
  
  <h2>Finding Roommates</h2>
  <p>While hotels and Airbnbs may be cheaper in Champaign-Urbana than other big cities, it's still pricey! Many people travel to Champaign-Urbana from out of town, so ask around the <Link title="DDRIllini Discord" external href={globals.discord}/> to see if folks are up to split rooms/costs.</p>

  <h2>More travel information</h2>
  <ul>
    <li><Link title="Venue info" href="/venue"/></li>
    <li><Link title="Getting around" href="/getting-around"/></li>
    <li><Link title="Local eateries" href="/food"/></li>
  </ul>

</div>