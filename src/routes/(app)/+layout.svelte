<script lang="ts">
  import '../../stylus/main.styl';
  import Header from '../../components/layout/Header.svelte';
  import Footer from '../../components/layout/Footer.svelte';
  let { children } = $props();

  export const prerender = true;
</script>

<Header/>
<main class="main">
  {@render children()}
  <Footer/>
</main>