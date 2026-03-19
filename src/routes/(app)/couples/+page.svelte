<script lang="ts">
  import globals from '../../../globals';
	import Meta from '../../../components/layout/Meta.svelte';
	import Action from '../../../components/Action.svelte';
  import Chart from '../../../components/Chart.svelte';

</script>

<svelte:head>
  <Meta title="Couples" desc='ITG Couples at Rumble in the Prairie.' noindex={false}/>
</svelte:head>

<div class="content">
<h1 class="center">Couples</h1>
  <div class="actions">
    <Action external link={globals.couples.pack} text="Download Pack"/>
    <Action external link={globals.couples.results} text="Results"/>
  </div>
  <h2 class="center">Ruleset + Format</h2>
  <div class="center">
    <iframe title="ITG Couples Ruleset and Format" src={globals.couples.rules} class="iframe-doc" height="800px" loading="lazy"></iframe>
  </div>
</div>