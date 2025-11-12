<script lang="ts">

    let { data } = $props();
     let { pokemon } = data;
</script>

<main class="flex flex-col">
<div class="text-center">
    <h1 class="text-3xl font-bold mb-4">{pokemon.name}</h1>
    <img src="{pokemon.image}" alt="{pokemon.name}" class="mx-auto mb-4" />
    <p class="text-lg">ID: {pokemon.id}</p>
</div>

</main>