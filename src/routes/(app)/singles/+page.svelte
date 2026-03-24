<script lang="ts">
  import globals from '../../../globals';
	import Meta from '../../../components/layout/Meta.svelte';
	import Action from '../../../components/Action.svelte';
  import Chart from '../../../components/Chart.svelte';
	import _data from '../../../data/packs/singles/pack.json';

  // functions to sort by
  const getTitle = song => song.titletranslit ? song.titletranslit : song.title;

  // sort data
  let sortMode = "tier"
  let data = _data;
  const sortData = (type) => {
    if (type === "tier") {
      sortMode = "tier"
      data = data
        .sort((a,b) => getTitle(a).localeCompare(getTitle(b), 'en', {'sensitivity': 'base'}))
        .sort((a,b) => a.tier - b.tier)
    } else if (type === "diff") {
      sortMode = "diff"
      data = data
        .sort((a,b) => a.difficulty - b.difficulty)
    } else if (type === "alpha") {
      sortMode = "alpha"
      data = data
        .sort((a,b) => getTitle(a).localeCompare(getTitle(b), 'en', {'sensitivity': 'base'}))
    }
  }

  sortData("tier")
</script>

<svelte:head>
  <Meta title="Singles" desc='ITG Singles at Rumble in the Prairie.' noindex={false}/>
</svelte:head>

<div class="content">
<h1 class="center">Singles</h1>
  <div class="actions">
    <Action external link={globals.singles.pack} text="Download Pack"/>
    <Action external link={globals.singles.seeding} text="Seeding + Standings"/>
    <Action external link={globals.singles.rules} text="Ruleset + Format"/>
    <Action external link={globals.singles.results} text="Results"/>
  </div>

  <h2 class="center">Songlist</h2>
  <div class="toggles">
    <p class="togglebar-label">sort by</p>
    <div class="togglebar">
      <button onclick={() => {sortData("tier")}} class:togglebar-on={sortMode === "tier"} class="togglebar-first">tier</button>
      <button onclick={() => {sortData("diff")}} class:togglebar-on={sortMode === "diff"} class="togglebar-piece">difficulty</button>
      <button onclick={() => {sortData("alpha")}} class:togglebar-on={sortMode === "alpha"} class="togglebar-last">alphabetical</button>
    </div>
  </div>
  <div class="songs">
    {#each data as song (song.sid)}
      <Chart pack="singles" chart={song}/>
    {/each}
  </div>
</div>