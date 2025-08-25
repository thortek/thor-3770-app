<script lang="ts">
  // You can add any necessary script logic here
  import BigIntro from "$lib/components/BigIntro.svelte";
  let src = "PikaThorAnime.png";
  let contentMessage = `This is the tutorial <strong>page content.</strong> It can include HTML tags.`;
</script>

<h1 class="text-blue-600 font-bold text-5xl text-center">Welcome to the tutorial page</h1>
<BigIntro />
<p class="text-center">{@html contentMessage}</p>
<img {src} alt="Pikachu with Thor's Hammer" class="mx-auto mt-4" />