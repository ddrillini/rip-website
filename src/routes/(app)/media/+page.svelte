<script lang="ts">
  import globals from '../../../globals';
	import Meta from '../../../components/layout/Meta.svelte';
	import Link from '../../../components/Link.svelte';

  const img = {
    gp:       "https://photos.app.goo.gl",
    sp:       "https://solus.page",
    discord:  "https://discord.com",
    orca:     "https://immich.orca.flights/share",
  }

</script>

<svelte:head>
  <Meta title="Media" desc='Photos and other media taken at previous Rumble in the Prairie events.' noindex={false}/>
</svelte:head>

<div class="content">
<h1>Media</h1>

<p class="comment">Some links point to unaffiliated services like Google Photos and Discord.</p>

<h2>RIP 15</h2>
<p class="comment">March 2026</p>
<ul>
  <li>Mallow: <Link external href="{img.orca}/4_qap7ixIabsw38vST24cKq63OeqVnVLbvQ8o2QbBLvkaXioaMyRkhXBloBs0pGV8_Y" title="photos"/></li>
  <li>quietly-turning: <Link external href="{img.gp}/PnPQZ1NL6RHj35GbA" title="photos"/></li>
  <li>Tyler F. (AHYD): <Link external href="{img.gp}/qrtf2nF4twM9ZCWh6" title="photos"/></li>
</ul>

<h2>Grumble in the Pasture</h2>
<p class="comment">February 2025</p>
<ul>
  <li> Mallow: <Link external href="{img.orca}/CS793kqAB05pTzq6E4sGGCKHRtL-a7RO-L9O0Sen7TO86i084haerrgERfibpyWFVRM" title="photos"/></li>
</ul>

<h2>RIP 14</h2>
<p class="comment">March 2024</p>
<ul>
  <li>Mallow: <Link external href="{img.orca}/zYURMeim0x6BpwGHMLJGxbjk9z0kJk0NUThHFv22MJ01khsu0rkbrPiD_ZgMyxUlLqk" title="photos"/></li>
  <li>Solus: <Link external href="{img.sp}/UBFOV1ATDwwR" title="photos"/></li>
</ul>

<h2>RIP 13.5</h2>
<p class="comment">November 2023</p>
<ul>
  <li>DDRIllini Discord:
    <Link external href="{img.discord}/XVhfUlJbVE0RDg8NCQ8MCQwHDA8KBw0PDQ4HEQsLCQ0NDwwIDQcHCgsICwcICBEPDwkLDA0NDg4PCQcMCQ8NCgwQ" title="photos"/>,
    <Link external href="{img.discord}/XVhfUlJbVE0RDg8NCQ8MCQwHDA8KBw0PDQ4HEQcODgoJCgkIBwcLEAoICw4QCxEPDwkMBwoQDA8QDgwICg8NCAcI" title="general RIP"/>
  </li>
  <li>Mallow: <Link external href="{img.orca}/l1qRyVWPPzL0k-Zud6UXkzvlO6-NElIFropV46ldAYcJYhdm7CDv77ZqB08CZ1V051U" title="photos"/></li>
  <li>Solus: <Link external href="{img.sp}/UBFOV1ATDw0TCxE=" title="photos"/></li>
</ul>

<h2>RIP 13</h2>
<p class="comment">March 2023</p>
<ul>
  <li>DDRIllini Discord: <Link external href="{img.discord}/XVhfUlJbVE0RDg8NCQ8MCQwHDA8KBw0PDQ4HEQsLCQ0NDwwIDQcHCgsICwcICBEPEAgMCgcHDQkKDA8ICwsMEA8K" title="photos"/></li>
  <li>Mallow: <Link external href="{img.orca}/dEglOk8KFcDjMwQOVjafSzE6TAnqD5Qqws_sxEAehbt-DN6bNqN0KdG-WmcaOaxh7UE" title="photos"/></li>
  <li>Solus: <Link external href="{img.sp}/UBFOV1ATDw0TEBE" title="photos"/></li>
  <li>Talkion: <Link external href="{img.gp}/SwtPCXVYS1ZQdFNcblxZSAo=" title="selfies"/></li>
  <li>Tyler F., Devin: <Link external href="{img.gp}/Vm5RDktvX115aAdfe3tOSQc=" title="photos"/></li>
</ul>

<h2>RIP 12.5</h2>
<p class="comment">November 2022</p>
<ul>
  <li>DDRIllini Discord: <Link external href="{img.discord}/XVhfUlJbVE0RDg8NCQ8MCQwHDA8KBw0PDQ4HEQsLCQ0NDwwIDQcHCgsICwcICBEPEAwNCwkPCgcMDgsLCQsPDg8I" title="photos"/></li>
  <li>Mallow: <Link external href="{img.orca}/40oR-YCqYxD_oZVvLw0V1VpJ53btTWbfcfA_5mdM00OEHjJR_6aj1OstAZP2vmX3sqw" title="photos"/>, <Link external href="yt://dE9ScHJ6XFN6E1k=" title="B-roll"/></li>
  <li>PSU collab: <Link external href="{img.gp}/bVVvc2l+ZklrXGxLWE9XTAg=" title="photos"/></li>
  <li>Solus: <Link external href="{img.sp}/UBFOV1ATDw4TCxE" title="photos"/></li>
</ul>

<h2>RIP 12.1</h2>
<p class="comment">March 2022</p>
<ul>
  <li>Mallow: <Link external href="{img.orca}/55iUA7i8neJePzcSW7P4Sd2E3rbBYw48NXY75inSdWQ-tREcmcmDGOT8pWJbW17L8iY" title="photos"/></li>
  <li>PSU collab: <Link external href="{img.gp}/U0xrRwxISVl9eHZ8S1BabAc=" title="photos"/></li>
  <li>Solus: <Link external href="{img.sp}/UBFOV1ATDw4TDxE" title="photos"/></li>
</ul>

<p>RIP 12 would have started on March 2020-13, but was cancelled on March 2020-12 due to the COVID-19 pandemic.</p>
<h2>Older Events</h2>
<ul>
  <li><Link external href="{img.orca}/aaSXYjc18UoCfim_5w2AM3B1AikueY1G6N_fKjaVqycRuuRnbKquR3ywuXb_i9ORdF4" title="RIP 11.5, Mallow"/></li>
    <li><Link external href="{img.orca}/-5EdZLyoosdB-SNkvwwGWkGfn69t3I_z2drSakVk0luIjr8YHU4xwfaNblVpaai4H2E" title="RIP 11, Mallow"/></li>
    <li><Link external href="{img.gp}/bE5STHtdfG18XktebHh+Ugg=" title="RIP 10, quietly-turning"/></li>
    <li><Link external href="{img.gp}/XU4PXH2TB111eGpoewx4Wn8=" title="RIP 9, quietly-turning"/></li>
    <li><Link external href="{img.gp}/aAdzTH9mW2hmCXhraV9QZwk=" title="RIP 8.5, quietly-turning"/></li>
    <li><Link external href="{img.gp}/DUoORkx8DQwKbmhmZlAKUgk=" title="RIP 7.5, quietly-turning"/></li>
    <li><Link external href="{img.gp}/ZlFvWnJ7b2cHDA1reGdKbwk=" title="RIP 5.5, quietly-turning"/></li>
</ul>

<p>Thank you.</p>
</div>