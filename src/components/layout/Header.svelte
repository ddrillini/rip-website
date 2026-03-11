<script lang="ts">
  import globals from '../../globals';
  import Menu from '../../img/icons/menu.svelte'

  let menuToggle = false;
</script>

<header class="header">
  <a class="logo" href="/" title="Rumble in the Prairie 15">
    <img class="logo-img" src="logo.png" alt="Rumble in the Prairie 15">
  </a>
  <button class="nav-toggle" on:click={() => menuToggle = !menuToggle}><Menu/></button>
  <nav class="nav" id="links" class:nav-active={menuToggle}>
    <a class="nav-link" href={globals.startgg} target="_blank" rel="noopener">Register</a>
    <a class="nav-link" href={globals.schedule} target="_blank" rel="noopener">Schedule</a>
    <a class="nav-link" href="/venue">Venue Info</a>
    <a class="nav-link" href={globals.forms.volunteer} target="_blank" rel="noopener">Volunteer</a>
  </nav>
</header>