<script lang="ts">
	// Demonstration of reactivity in Svelte using $state, $derived, and $effect
	import Counter from '$lib/components/Counter.svelte';

	let count = $state(0);
	let numbers = $state([1, 2, 3, 4]);
	let total = $derived(numbers.reduce((acc, n) => acc + n, 0));
	let m = $state({ x: 0, y: 0 });
	let elapsed = $state(0);
	let interval = $state(1000);

	$effect(() => {
		const id = setInterval(() => {
			elapsed += 1;
		}, interval);
		return () => {
			clearInterval(id);
		};
	});

	function addNumber() {
		numbers.push(numbers.length + 1);
	}

	function onpointermove(event: any) {
		m.x = event.clientX;
		m.y = event.clientY;
	}
</script>

<div class="flex flex-col items-center justify-center gap-4 p-4">
	<h1>Reactivity in Svelte</h1>

	<div class="flex gap-2">
	<Counter />
	<Counter />
	<Counter />
	<Counter />
	</div>

	<button class="btn preset-filled-secondary-950-50" onclick={addNumber}> Add a number </button>

	<p>{numbers.join(' + ')} = {total}</p>

	<div class="h-96 w-96 bg-amber-100" {onpointermove}>
		The point is at {Math.round(m.x)} x {Math.round(m.y)}
	</div>

	<button class="btn preset-filled-tertiary-950-50" onclick={() => (interval /= 2)}>speed up</button
	>
	<button class="btn preset-filled-tertiary-950-50" onclick={() => (interval *= 2)}
		>slow down</button
	>

	<p>elapsed: {elapsed}</p>
</div>
