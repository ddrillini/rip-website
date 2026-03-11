<script lang="ts">
	import SinglesLogo from '../../../../../img/icons/logo-singles.svelte';
  export let data;

  const url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTL4WCek0BDzJmpUbEhtTN5oHOYsNA7zBVcd5XtTc8tarrtAyDKd-G5L16L47FHPXv6x3dergDr6Y42/pub?gid=1369706305&single=true&output=csv"

  $: scoreData = null;
  let getData = async (target: string) => {
    try {
      const res = await fetch(target);
      if (!res.ok) {
        throw new Error(`res status: ${res.status}`);
      }
      return await res.text();
    } catch (error) {
      throw new Error(error.message);
    }
  }

  let promise = null
  const makePromise = () => {
    promise = getData(url)
    .then(res => {
      if (res !== "Loading...") {
        scoreData = JSON.parse(res.replaceAll(`""`, `"`).slice(1,-1));
      }
    });
  }
  // run every 80s
  makePromise();
  setInterval(() => makePromise(), 80000);

  const pool = data.slug;
  const [st, n] = pool.split("-");
  const isDE = st === 'de';
  const isTopFour = n.charCodeAt(0) >= 103;
  const numDraws = isDE ? (isTopFour ? 5 : 3) : 6;

  // validate based on if all scores are not ""
  const isSongDone = (arr, song) => {
    const check = arr.filter(x => x[`${song}s`] !== "")
    return check.length === (isDE ? 2 : 4);
  }

  const isPoolDone = arr => {
    const checkY = arr.filter(x => x.adv === "Y")
    const checkTie = arr.filter(x => x.adv === "TIE")
    return checkY.length >= 1 && checkTie.length === 0
  }

  const poolName = () => {
    if (st === "de") {
      switch (n) {
        case "a": return "WINNERS SEMIFINALS";
        case "b": return "WINNERS SEMIFINALS";
        case "c": return "LOSERS ROUND 1";
        case "d": return "LOSERS ROUND 1";
        case "e": return "LOSERS QUARTERFINALS";
        case "f": return "LOSERS QUARTERFINALS";
        case "g": return "WINNERS FINALS";
        case "h": return "LOSERS SEMIFINALS";
        case "i": return "LOSERS FINALS";
        case "j": return "GRAND FINALS";
        case "k": return "GRAND FINALS";
      }
    } else {
      return `POOL ${st}${n.toUpperCase()}`
    }
  }

</script>

{#await promise}
  <p class="event-pool">Loading...</p>
{:then}
  {@const arr = scoreData[pool]
    .sort((a,b) => b.tie - a.tie)
    .sort((a,b) => b.avg - a.avg)
    .sort((a,b) => b.points - a.points)
  }
  <div class="content">
    <div class="event">
      <SinglesLogo/>
      <div class="event-detail">
        <p class="event-pool">ITG Singles</p>
        <p class="event-status">{poolName()} &mdash; {isPoolDone(arr) ? "RESULT" : "STANDINGS"}</p>
      </div>
    </div>
    <div class="board">
      {#each arr as plr, e (plr.name)}
        <div class="plr-outer">
          <div class="plr">
            <div class="plr-place"><span>{e+1}</span></div>
            <div class="plr-detail">
              <span class="plr-seed">{plr.seed}</span>
              <span class="plr-name" class:unknown={!plr.seed}>{plr.name}</span>
              {#if isSongDone(arr, 1)}
                {#each {length: numDraws} as _, i}
                  {@const scl = ((isDE ? 1 : 3) - plr[`${i+1}p`]) + 1}
                  <div class="plr-song" class:x1={isDE && !isTopFour} class:x2={isDE && isTopFour}>
                    <span class="plr-song-num">{i+1}</span>
                    {#if isSongDone(arr, i+1)}
                      <span class="plr-song-score">{(plr[`${i+1}s`]).toFixed(2, '0')}</span>
                    {:else}
                      <span class="plr-song-score">&mdash;</span>
                    {/if}
                    {#if scl === 1}
                      <div class="plr-song-first"></div>
                    {/if}
                  </div>
                {/each}
              {/if}
              <span class="plr-points">{plr.points}</span>
            </div>
          </div>
          {#if plr.adv === "Y"}
            <span class="plr-adv">ADV</span>
          {/if}
        </div>
      {/each}
    </div>
  </div>
{:catch error}
  <div class="content">
    <div class="event">
      <p class="event-pool">API ERROR</p>
      <p class="event-status">Please ping <b class="help">@cering</b> on Discord:</p>
      <p class="event-error">{error.message}</p>
    </div>
  </div>
{/await}