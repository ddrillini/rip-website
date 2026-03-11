<script lang="ts">
  import globals from '../../globals';
	import Meta from '../../components/layout/Meta.svelte';
	import Action from '../../components/Action.svelte';
</script>

<svelte:head>
  <Meta title="Home" desc='Rumble in the Prairie - March 13th to 15th, 2026' noindex={false}/>
</svelte:head>

<div class="hero"></div>

<div class="content">
  <h1 class="center">Get ready to Rumble!</h1>
  <p class="center">DDRIllini is proud to present another installment of Rumble in the Prairie!</p>
  <div class="actions spacer">
    <Action external text="Register on Start.gg" link="{globals.startgg}"/>
    <Action external text="Schedule" link={globals.schedule}/>
    <Action external text="DDRIllini Discord" link={globals.discord}/>
    <Action disabled text="Stream" link="https://www.twitch.tv/intltiming"/>
  </div>

  <div class="double spacer">
    <div class="double-section">
      <h1 class="center">Singles</h1>
      <div class="actions">
        <Action link="/singles" text="Songlist + Download"/>
        <Action external link={globals.singles.seeding} text="Seeding + Standings"/>
        <Action external link={globals.singles.rules} text="Ruleset + Format"/>
        <Action disabled link={globals.singles.results} text="Results"/>
      </div>
    </div>

    <div class="double-section">
      <h1 class="center">Side Brackets</h1>
      <div class="actions">
        <Action link="/doubles" bg="events/doubles.png"/>
        <Action link="/couples" bg="events/couples.jpg"/>
        <Action link="/pump" bg="events/pump.jpg"/>
        <Action link="/srt" bg="events/srt.png"/>
      </div>
    </div>
  </div>

  <h1 class="center">Travel information</h1>
  <div class="actions">
    <Action text="Venue info" link="/venue"/>
    <Action text="Hotels + Lodging" link="/lodging"/>
    <Action text="Getting Around" link="/getting-around"/>
    <Action text="Local Eateries" link="/food"/>
  </div>

</div>