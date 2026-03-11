<script lang="ts">
  import globals from '../../globals';
	import Discord from '../../img/icons/discord.svelte';
  import Link from '../Link.svelte';
  const socials = [
    {name: "Discord", url: globals.discord, element: Discord},
  ]
</script>

<footer class="footer">
  <!--<div class="socials">
    {#each socials as social}
      <a class="socials-link" href={social.url} target="_blank" rel="noopener" title={social.name} aria-label={social.name}>
        <social.element/>
      </a>
    {/each}
  </div>-->
  <div class="footer-inner">
    <p class="footer-copy">© {(new Date()).getFullYear()} DDRIllini. Site by <Link title="CERiNG" external href="https://cering.dev"/>. Logo/art by <Link title="mangoafterdawn" external href="https://bsky.app/profile/mangoafterdawn.bsky.social"/>.</p>
  </div>
</footer>