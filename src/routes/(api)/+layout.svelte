<script lang="ts">
  import '../../stylus/stream.styl';

  let { children } = $props();
  export const prerender = true;
</script>

<main class="main">
  {@render children()}
</main>