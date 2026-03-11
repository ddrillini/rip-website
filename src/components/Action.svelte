<script lang="ts">
  let { text="", link, bg="", external=false, disabled=false } = $props();
  const classes = disabled ? "action-off" : "action-button";
  const style = bg !== "" ? `background-image: url(${bg})` : "";
  const href = disabled ? "javascript:void(0)" : link ;
</script>

<a class={classes} href={href} title={text} aria-label={text} style={style} target={external ? "_blank" : ""} rel={external ? "noopener" : ""}><span>{text}</span></a>