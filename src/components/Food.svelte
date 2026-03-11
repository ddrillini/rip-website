<script lang="ts">
	import Link from '../components/Link.svelte';
  let { title, link, desc } = $props();
</script>

<p>
  <Link title={title} link="https://maps.app.goo.gl/{link}" external/> &mdash; {desc}
</p>