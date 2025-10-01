<script lang="ts">
	import BigGreenButton from '$lib/components/BigGreenButton.svelte'
	import Stepper from '$lib/components/Stepper.svelte'

	let stepValue = $state(0)
	let m = $state({ x: 0, y: 0 })

	function handleMouseMove(event: MouseEvent) {
		m.x = event.clientX
		m.y = event.clientY
	}

	function honk() {
		alert('Honk!')
	}
</script>

<!-- Page Header -->
<div class="max-w-6xl mx-auto px-6 py-12">
	<div class="text-center mb-12">
		<div class="inline-block">
			<div class="flex items-center gap-3 mb-4">
				<span class="text-6xl">🎯</span>
				<h1 class="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
					Events in Svelte
				</h1>
			</div>
			<p class="text-gray-400 text-lg font-mono">Handle user interactions and DOM events</p>
		</div>
	</div>

	<!-- Mouse Tracking Section -->
	<section class="mb-12">
		<div class="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-orange-500/30 p-8 shadow-xl shadow-orange-500/10">
			<div class="flex items-center gap-3 mb-6">
				<div class="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-xl">
					🖱️
				</div>
				<h2 class="text-2xl font-bold text-white">Pointer Events</h2>
			</div>
			<p class="text-gray-300 mb-6">Track mouse movement with the <code class="px-2 py-1 bg-gray-700 rounded text-orange-400 font-mono text-sm">onpointermove</code> event:</p>
			
			<div 
				class="h-96 border-2 border-orange-500/30 rounded-xl bg-gradient-to-br from-orange-900/10 to-red-900/10 flex items-center justify-center cursor-crosshair hover:border-orange-400/50 transition-colors duration-300" 
				onpointermove={handleMouseMove}
			>
				<div class="text-center">
					<p class="text-gray-400 text-sm font-mono mb-2">POINTER COORDINATES</p>
					<p class="text-4xl font-bold text-orange-400 font-mono">
						{Math.round(m.x)} × {Math.round(m.y)}
					</p>
					<p class="text-gray-500 text-xs font-mono mt-2">Move your mouse over this area</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Event Bubbling Section -->
	<section class="mb-12">
		<div class="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-purple-500/30 p-8 shadow-xl shadow-purple-500/10">
			<div class="flex items-center gap-3 mb-6">
				<div class="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-xl">
					⬆️
				</div>
				<h2 class="text-2xl font-bold text-white">Event Bubbling</h2>
			</div>
			<p class="text-gray-300 mb-6">Events propagate up through parent elements. Click in the input or container to see bubbling:</p>
			
			<div 
				class="bg-gray-900/50 rounded-xl p-8 border border-purple-500/20" 
				onkeydown={(e) => alert(`<div> detected: ${e.key}`)} 
				role="presentation"
			>
				<div class="bg-purple-900/20 border border-purple-500/30 rounded-lg p-6">
					<p class="text-gray-300 mb-4 text-center">
						<span class="text-purple-400 font-semibold">Parent Container:</span> Click here and press any key
					</p>
					<p class="text-gray-400 text-sm text-center mb-4">
						Events bubble from the input to this container
					</p>
					<input 
						class="w-full bg-red-900/20 border-2 border-red-500/50 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-red-400 focus:outline-none transition-colors duration-300" 
						placeholder="Type here to trigger input event first..."
						onkeydown={(e) => alert(`<input> detected: ${e.key}`)} 
					/>
				</div>
			</div>
		</div>
	</section>

	<!-- Component Events Section -->
	<section class="mb-12">
		<div class="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-cyan-500/30 p-8 shadow-xl shadow-cyan-500/10">
			<div class="flex items-center gap-3 mb-6">
				<div class="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-xl">
					🔧
				</div>
				<h2 class="text-2xl font-bold text-white">Component Events</h2>
			</div>
			<p class="text-gray-300 mb-6">Pass event handlers to child components as props:</p>
			
			<div class="bg-gray-900/50 rounded-xl p-8 border border-cyan-500/20">
				<!-- Stepper Component -->
				<div class="mb-8">
					<div class="flex items-center gap-3 mb-4">
						<span class="text-2xl">📊</span>
						<h3 class="text-xl font-semibold text-cyan-400">Stepper Component</h3>
					</div>
					<p class="text-gray-300 mb-4">Component with increment/decrement callbacks:</p>
					
					<div class="flex flex-col items-center gap-4 bg-cyan-900/10 rounded-lg p-6 border border-cyan-500/20">
						<div class="text-center">
							<p class="text-gray-400 text-sm font-mono mb-2">CURRENT VALUE</p>
							<p class="text-5xl font-bold text-cyan-400 font-mono">{stepValue}</p>
						</div>
						<Stepper 
							twClass="m-2" 
							increment={() => (stepValue += 1)} 
							decrement={() => (stepValue -= 1)} 
						/>
					</div>
				</div>

				<!-- Button Event -->
				<div>
					<div class="flex items-center gap-3 mb-4">
						<span class="text-2xl">🔘</span>
						<h3 class="text-xl font-semibold text-blue-400">Custom Click Handler</h3>
					</div>
					<p class="text-gray-300 mb-4">Pass custom onclick handlers to components:</p>
					
					<div class="flex justify-center bg-blue-900/10 rounded-lg p-6 border border-blue-500/20">
						<BigGreenButton onclick={honk} />
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Key Concepts -->
	<section class="mb-12">
		<div class="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-green-500/30 p-8 shadow-xl shadow-green-500/10">
			<div class="flex items-center gap-3 mb-6">
				<div class="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-xl">
					💡
				</div>
				<h2 class="text-2xl font-bold text-white">Event Handling Concepts</h2>
			</div>
			
			<div class="grid md:grid-cols-2 gap-4">
				<div class="bg-gray-900/50 rounded-lg p-5 border border-green-500/20">
					<h4 class="font-semibold text-green-400 mb-2">🎪 Event Bubbling</h4>
					<p class="text-gray-300 text-sm">Events propagate from child to parent elements</p>
				</div>
				<div class="bg-gray-900/50 rounded-lg p-5 border border-green-500/20">
					<h4 class="font-semibold text-green-400 mb-2">📤 Event Forwarding</h4>
					<p class="text-gray-300 text-sm">Pass event handlers to child components</p>
				</div>
				<div class="bg-gray-900/50 rounded-lg p-5 border border-green-500/20">
					<h4 class="font-semibold text-green-400 mb-2">🎯 Inline Handlers</h4>
					<p class="text-gray-300 text-sm">Write event handlers directly in templates</p>
				</div>
				<div class="bg-gray-900/50 rounded-lg p-5 border border-green-500/20">
					<h4 class="font-semibold text-green-400 mb-2">⚡ DOM Events</h4>
					<p class="text-gray-300 text-sm">Access all standard browser events</p>
				</div>
			</div>
		</div>
	</section>
</div>
