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

<!-- Page Header -->
<div class="max-w-6xl mx-auto px-6 py-12">
	<div class="text-center mb-12">
		<div class="flex items-center justify-center gap-3 mb-4">
			<span class="text-6xl">⚡</span>
			<h1 class="text-5xl font-bold">Reactivity in Svelte</h1>
		</div>
		<p class="text-surface-600-400 text-lg">Master reactive state management with $state, $derived, and $effect</p>
	</div>

	<!-- Multiple Counters Section -->
	<section class="mb-12">
		<div class="card preset-filled p-8">
			<div class="flex items-center gap-3 mb-6">
				<span class="text-4xl">🔢</span>
				<h2 class="text-3xl font-bold">Independent Counter Components</h2>
			</div>
			<p class="text-surface-600-400 mb-6">Each counter maintains its own reactive state using <code class="code">$state</code>:</p>
			
			<div class="flex flex-wrap gap-4 justify-center">
				<Counter />
				<Counter />
				<Counter />
				<Counter />
			</div>
		</div>
	</section>

	<!-- Derived State Section -->
	<section class="mb-12">
		<div class="card preset-filled p-8">
			<div class="flex items-center gap-3 mb-6">
				<span class="text-4xl">➕</span>
				<h2 class="text-3xl font-bold">Derived Reactivity</h2>
			</div>
			<p class="text-surface-600-400 mb-6">The <code class="code">$derived</code> rune automatically recalculates when dependencies change:</p>
			
			<div class="text-center">
				<button 
					class="btn preset-filled-primary-500 mb-6"
					onclick={addNumber}
				>
					Add a number
				</button>
				
				<div class="card preset-tonal p-6">
					<p class="text-3xl font-mono">
						{numbers.join(' + ')} = <span class="font-bold text-primary-500">{total}</span>
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Mouse Tracking Section -->
	<section class="mb-12">
		<div class="card preset-filled p-8">
			<div class="flex items-center gap-3 mb-6">
				<span class="text-4xl">🖱️</span>
				<h2 class="text-3xl font-bold">Event Reactivity</h2>
			</div>
			<p class="text-surface-600-400 mb-6">Move your mouse over the area below to see reactive updates in real-time:</p>
			
			<div 
				class="h-96 w-full card preset-outlined flex items-center justify-center cursor-crosshair hover:preset-tonal transition-colors duration-300" 
				{onpointermove}
			>
				<div class="text-center">
					<p class="text-surface-600-400 text-sm font-mono mb-2">COORDINATES</p>
					<p class="text-4xl font-bold text-primary-500 font-mono">
						{Math.round(m.x)} × {Math.round(m.y)}
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Effect Timer Section -->
	<section class="mb-12">
		<div class="card preset-filled p-8">
			<div class="flex items-center gap-3 mb-6">
				<span class="text-4xl">⏱️</span>
				<h2 class="text-3xl font-bold">Side Effects with $effect</h2>
			</div>
			<p class="text-surface-600-400 mb-6">The <code class="code">$effect</code> rune runs code when dependencies change and handles cleanup:</p>
			
			<div class="flex flex-col items-center gap-6">
				<div class="card preset-tonal p-6">
					<p class="text-surface-600-400 text-sm font-mono mb-2">ELAPSED TIME</p>
					<p class="text-5xl font-bold text-primary-500 font-mono">{elapsed}s</p>
					<p class="text-surface-600-400 text-xs font-mono mt-2">Interval: {interval}ms</p>
				</div>
				
				<div class="flex gap-4">
					<button 
						class="btn preset-filled-secondary-500"
						onclick={() => (interval /= 2)}
					>
						⚡ Speed Up
					</button>
					<button 
						class="btn preset-filled-tertiary-500"
						onclick={() => (interval *= 2)}
					>
						🐌 Slow Down
					</button>
				</div>
			</div>
		</div>
	</section>
</div>
