<script lang="ts">
  import globals from '../../../globals';
	import Meta from '../../../components/layout/Meta.svelte';
	import Action from '../../../components/Action.svelte';
  import Chart from '../../../components/Chart.svelte';
	import _data from '../../../data/packs/doubles/pack.json';

  // functions to sort by
  const getTitle = song => song.titletranslit ? song.titletranslit : song.title;

  // sort data
  let sortMode = "diff"
  let data = _data;
  const sortData = (type) => {
    if (type === "diff") {
      sortMode = "diff"
      data = data
        .sort((a,b) => a.difficulty - b.difficulty)
    } else if (type === "alpha") {
      sortMode = "alpha"
      data = data
        .sort((a,b) => getTitle(a).localeCompare(getTitle(b), 'en', {'sensitivity': 'base'}))
    }
  }

  sortData("diff")
</script>

<svelte:head>
  <Meta title="Doubles" desc='ITG Doubles at Rumble in the Prairie.' noindex={false}/>
</svelte:head>

<div class="content">
<h1 class="center">Doubles</h1>
  <div class="actions">
    <Action external link={globals.doubles.pack} text="Download Pack"/>
    <Action external link={globals.doubles.rules} text="Ruleset + Format"/>
    <Action external link={globals.doubles.results} text="Results"/>
  </div>

  <h2 class="center">Songlist</h2>
  <div class="toggles">
    <p class="togglebar-label">sort by</p>
    <div class="togglebar">
      <button onclick={() => {sortData("diff")}} class:togglebar-on={sortMode === "diff"} class="togglebar-first">difficulty</button>
      <button onclick={() => {sortData("alpha")}} class:togglebar-on={sortMode === "alpha"} class="togglebar-last">alphabetical</button>
    </div>
  </div>
  <div class="songs">
    {#each data as song (song.sid)}
      <Chart pack="doubles" chart={song}/>
    {/each}
  </div>
</div>