<script lang="ts">
	import { onMount } from 'svelte'

	let pokeDex: any[] = []

	onMount(async () => {
        const randomPokemonID = Math.floor(Math.random() * 1000) + 1
		const res = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${randomPokemonID}&limit=25`)
		const data = await res.json()
		pokeDex = data.results
	})
</script>

<main>
	<div class="flex flex-wrap m-4">
		{#each pokeDex as pokemon}
			<div class="m-3">
				<a href={`/tutorial/pokemon/${pokemon.name}`} class="border p-2 rounded-lg bg-primary-50-950  hover:underline">
					{pokemon.name}
				</a>
			</div>
		{/each}
	</div>
</main>
