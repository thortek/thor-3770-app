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
		<div class="inline-block">
			<div class="flex items-center gap-3 mb-4">
				<span class="text-6xl">⚡</span>
				<h1 class="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
					Reactivity in Svelte
				</h1>
			</div>
			<p class="text-gray-400 text-lg font-mono">Master reactive state management with $state, $derived, and $effect</p>
		</div>
	</div>

	<!-- Multiple Counters Section -->
	<section class="mb-12">
		<div class="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-cyan-500/30 p-8 shadow-xl shadow-cyan-500/10">
			<div class="flex items-center gap-3 mb-6">
				<div class="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-xl">
					🔢
				</div>
				<h2 class="text-2xl font-bold text-white">Independent Counter Components</h2>
			</div>
			<p class="text-gray-300 mb-6">Each counter maintains its own reactive state using <code class="px-2 py-1 bg-gray-700 rounded text-cyan-400 font-mono text-sm">$state</code>:</p>
			
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
		<div class="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-purple-500/30 p-8 shadow-xl shadow-purple-500/10">
			<div class="flex items-center gap-3 mb-6">
				<div class="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-xl">
					➕
				</div>
				<h2 class="text-2xl font-bold text-white">Derived Reactivity</h2>
			</div>
			<p class="text-gray-300 mb-6">The <code class="px-2 py-1 bg-gray-700 rounded text-purple-400 font-mono text-sm">$derived</code> rune automatically recalculates when dependencies change:</p>
			
			<div class="text-center">
				<button 
					class="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 mb-6"
					onclick={addNumber}
				>
					Add a number
				</button>
				
				<div class="bg-gray-900/50 rounded-xl p-6 border border-purple-500/20">
					<p class="text-3xl font-mono text-white">
						{numbers.join(' + ')} = <span class="text-purple-400 font-bold">{total}</span>
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Mouse Tracking Section -->
	<section class="mb-12">
		<div class="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-green-500/30 p-8 shadow-xl shadow-green-500/10">
			<div class="flex items-center gap-3 mb-6">
				<div class="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-xl">
					🖱️
				</div>
				<h2 class="text-2xl font-bold text-white">Event Reactivity</h2>
			</div>
			<p class="text-gray-300 mb-6">Move your mouse over the area below to see reactive updates in real-time:</p>
			
			<div 
				class="h-96 w-full bg-gradient-to-br from-green-900/20 to-emerald-900/20 rounded-xl border-2 border-green-500/30 flex items-center justify-center cursor-crosshair hover:border-green-400/50 transition-colors duration-300" 
				{onpointermove}
			>
				<div class="text-center">
					<p class="text-gray-400 text-sm font-mono mb-2">COORDINATES</p>
					<p class="text-4xl font-bold text-green-400 font-mono">
						{Math.round(m.x)} × {Math.round(m.y)}
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Effect Timer Section -->
	<section class="mb-12">
		<div class="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-orange-500/30 p-8 shadow-xl shadow-orange-500/10">
			<div class="flex items-center gap-3 mb-6">
				<div class="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-xl">
					⏱️
				</div>
				<h2 class="text-2xl font-bold text-white">Side Effects with $effect</h2>
			</div>
			<p class="text-gray-300 mb-6">The <code class="px-2 py-1 bg-gray-700 rounded text-orange-400 font-mono text-sm">$effect</code> rune runs code when dependencies change and handles cleanup:</p>
			
			<div class="flex flex-col items-center gap-6">
				<div class="bg-gray-900/50 rounded-xl p-6 border border-orange-500/20">
					<p class="text-gray-400 text-sm font-mono mb-2">ELAPSED TIME</p>
					<p class="text-5xl font-bold text-orange-400 font-mono">{elapsed}s</p>
					<p class="text-gray-500 text-xs font-mono mt-2">Interval: {interval}ms</p>
				</div>
				
				<div class="flex gap-4">
					<button 
						class="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300 transform hover:scale-105"
						onclick={() => (interval /= 2)}
					>
						⚡ Speed Up
					</button>
					<button 
						class="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105"
						onclick={() => (interval *= 2)}
					>
						🐌 Slow Down
					</button>
				</div>
			</div>
		</div>
	</section>
</div>
