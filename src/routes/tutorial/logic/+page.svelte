<script lang="ts">
	import Counter from '$lib/components/Counter.svelte';
	import { counter } from '$lib/global/globalCount.svelte';
</script>

<div class="w-96 mx-auto card preset-filled-surface-100-900 p-4 text-center">
	<h1 class="text-3xl font-bold underline">Logic Tutorials Coming Soon!</h1>

	<Counter />

	{#if counter.count > 10}
		<p>{counter.count} is greater than 10</p>
	{/if}
</div>
