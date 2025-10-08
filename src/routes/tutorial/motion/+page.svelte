<script lang="ts">
	import { fade, fly } from 'svelte/transition'

	let checkboxVisible = $state(true)
    let flyVisible = $state(true)
</script>

<div class="m-4 flex flex-col items-center gap-4 p-4">

		<label class="flex items-center gap-2">
			<input type="checkbox" class="checkbox" bind:checked={checkboxVisible} />
			Show Greek God Fight
		</label>
	{#if checkboxVisible}
		<img
			src="/greek_god_fight.png"
			alt="Greek God Fight"
			class="w-[400px] rounded-lg shadow-lg"
			transition:fade
		/>
	{/if}

    <label class="flex items-center gap-2">
			<input type="checkbox" class="checkbox" bind:checked={flyVisible} />
			Show Bizzaro Squidward
		</label>
    {#if flyVisible}
		<img
			src="/bizarro_squidward.png"
			alt="Bizzarro Squidward"
			class="w-[400px] rounded-lg shadow-lg"
			transition:fly={{ y: 200, duration: 2000 }}
		/>
	{/if}
</div>
