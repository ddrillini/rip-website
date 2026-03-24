<script lang="ts">
  import globals from '../../../globals';
	import Meta from '../../../components/layout/Meta.svelte';
	import Action from '../../../components/Action.svelte';
  import Chart from '../../../components/Chart.svelte';

</script>

<svelte:head>
  <Meta title="Pump It Up" desc='Pump It Up at Rumble in the Prairie.' noindex={false}/>
</svelte:head>

<div class="content">
<h1 class="center">Pump It Up</h1>
  <div class="actions">
    <Action external link={globals.pump.seeding} text="Seeding"/>
    <Action external link={globals.pump.results} text="Results"/>
  </div>
  <h2 class="center">Ruleset + Format</h2>
  <div class="center">
    <iframe title="Pump It Up Ruleset and Format" src={globals.pump.rules} class="iframe-doc"  height="800px" loading="lazy"></iframe>
  </div>
</div>