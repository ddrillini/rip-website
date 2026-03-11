<script lang="ts">
  import globals from '../../../globals';
	import Meta from '../../../components/layout/Meta.svelte';
	import Action from '../../../components/Action.svelte';
  import Chart from '../../../components/Chart.svelte';

</script>

<svelte:head>
  <Meta title="Tech SRT" desc='The Technical Proficiency Exam 3 at Rumble in the Prairie 15.' noindex={false}/>
</svelte:head>

<div class="content">
<h1 class="center">Tech SRT</h1>
  <div class="actions">
    <Action external link={globals.srt.schedule} text="Qualifier Schedule"/>
    <Action external disabled link={globals.srt.results} text="Results"/>
  </div>
  <h2 class="center">Ruleset + Format</h2>
  <div class="center">
    <iframe title="srt It Up Ruleset and Format" src={globals.srt.rules} class="iframe-doc" height="800px" loading="lazy"></iframe>
  </div>
</div>