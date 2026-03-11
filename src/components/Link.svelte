<script lang="ts">
	import Icon from '../img/icons/external.svelte';
  let { title, href, external=false } = $props();

  const target = external ? "_blank" : null;
  const rel = external ? "noopener" : null;
</script>

<a class="link" href={href} title={title} aria-label={title} {target} {rel}>{title}
</a>
{#if external} <Icon decorative/> {/if}
