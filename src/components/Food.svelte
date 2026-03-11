<script lang="ts">
	import Link from '../components/Link.svelte';
  let { title, gmaps, desc } = $props();
</script>

<p>
  <Link title={title} href="https://maps.app.goo.gl/{gmaps}" external/> &mdash; {desc}
</p>