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
  <h1 class="center">Thank you!</h1>
  <p class="center">DDRIllini and the event organizers for Rumble in the Prairie 15 are proud to have brought another successful tournament to a close. We hope you enjoyed your experience!</p>
  <div class="actions spacer">
    <!--<Action external text="Register on Start.gg" link="{globals.startgg}"/>-->
    <!--<Action external text="Schedule" link={globals.schedule}/>-->
    <Action external text="Feedback Form" link={globals.feedback}/>
    <Action external text="DDRIllini Discord" link={globals.discord}/>
    <Action exteranl text="VODs" link="https://www.youtube.com/@ddrillini2357/videos"/>
  </div>

  <div class="double spacer">
    <div class="double-section">
      <h1 class="center">Singles</h1>
      <div class="actions">
        <Action link="/singles" text="Songlist + Download"/>
        <Action external link={globals.singles.seeding} text="Seeding + Standings"/>
        <Action external link={globals.singles.rules} text="Ruleset + Format"/>
        <Action exteranl link={globals.singles.results} text="Results"/>
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