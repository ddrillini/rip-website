<script lang="ts">
  let { pack, chart } = $props();
  // get translit stuff
  let title       = chart.titletranslit ? chart.titletranslit : chart.title
  const subtitle  = chart.subtitletranslit ? chart.subtitletranslit : chart.subtitle
  const artist    = chart.artisttranslit ? chart.artisttranslit : chart.artist

  // function to import banners
  const banners = import.meta.glob(
    '/src/data/packs/**/bn/**.jpg',
    { eager: true, as: 'url' }
  );
  const bn = banners[`/src/data/packs/${pack}/bn/${chart.sid}.jpg`];

  const slot = chart.slot.toLowerCase();

  let bpm = chart.displaybpm;
  bpm = bpm[0] === bpm[1] ? bpm[0] : `${bpm[0]} - ${bpm[1]}`

</script>

<div class="chart">
  <div class="chart-card">
    <div class="chart-bn">
      <enhanced:img class="chart-img" src={bn} alt="{artist} - {title}"/>
    </div>
    {#if chart.tier}
      <p class="tier-{chart.tier}">
        <span>Tier {chart.tier}</span>
      </p>
    {/if}
    <div class="chart-inner">
      <div class="chart-top">
        <p class="chart-bpm"><b>{bpm} BPM</b></p>
        <div class="chart-diffs">
          <p class="difficulty-{slot}">
            <span class="difficulty-{slot}-num">{chart.difficulty}</span>
          </p>
        </div>
      </div>
      <div class="chart-bottom">
        <div class="chart-meta">
          <p class="chart-artist">{artist}</p>
          <p class="chart-title">{title} <span class="chart-subtitle">{subtitle}</span></p>
        </div>
        <p class="chart-desc">{chart.description}</p>
      </div>
    </div>
  </div>
</div>