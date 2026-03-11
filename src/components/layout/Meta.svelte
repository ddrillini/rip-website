<script lang="ts">
  let { title, desc, noindex } = $props();
</script>

<title>{title} – RIP 15</title>
<meta name="title" content="{title} – RIP 15"/>
<meta name="og:title" content="{title} – RIP 15"/>
<meta name="description" content={desc}/>
<meta name="og:description" content={desc}/>
{#if noindex}
  <meta name="robots" content="noindex, nofollow"/>
{:else}
  <meta name="robots" content="index, nofollow"/>
{/if}