<script lang="ts">
    import { marked } from 'marked'
	import InsecureQuestion from '$lib/components/InsecureQuestion.svelte'

	let name = $state('world')
	let markdownToShow = $state(`Here is *italics* and **bold** \n\n - And a list item \n\n - Another list item`)

	let scoops = $state(1)
	let availableFlavors = $state(['Vanilla', 'Chocolate', 'Strawberry'])
    let flavors = $state([] as string[])
</script>

<!-- Page Header -->
<div class="max-w-6xl mx-auto px-6 py-12">
	<div class="text-center mb-12">
		<div class="inline-block">
			<div class="flex items-center gap-3 mb-4">
				<span class="text-6xl">🔄</span>
				<h1 class="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">
					Bindings in Svelte
				</h1>
			</div>
			<p class="text-gray-400 text-lg font-mono">Two-way data binding mastery</p>
		</div>
	</div>

	<!-- Text Input Binding Section -->
	<section class="mb-12">
		<div class="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-indigo-500/30 p-8 shadow-xl shadow-indigo-500/10">
			<div class="flex items-center gap-3 mb-6">
				<div class="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center text-xl">
					✍️
				</div>
				<h2 class="text-2xl font-bold text-white">Text Input Binding</h2>
			</div>
			<p class="text-gray-300 mb-6">Use <code class="px-2 py-1 bg-gray-700 rounded text-indigo-400 font-mono text-sm">bind:value</code> for two-way data binding with inputs:</p>
			
			<div class="bg-gray-900/50 rounded-xl p-6 border border-indigo-500/20">
				<div class="mb-6">
					<label class="block text-gray-400 text-sm font-mono mb-2">Type your name:</label>
					<input 
						class="w-full bg-gray-800 border-2 border-indigo-500/50 rounded-lg px-4 py-3 text-white focus:border-indigo-400 focus:outline-none transition-colors duration-300" 
						type="text" 
						bind:value={name} 
						placeholder="Enter text here..."
					/>
				</div>
				<div class="bg-indigo-900/20 border border-indigo-500/30 rounded-lg p-4">
					<p class="text-gray-400 text-sm font-mono mb-2">OUTPUT:</p>
					<h1 class="text-3xl font-bold text-indigo-400">Hello {name}!</h1>
				</div>
			</div>
		</div>
	</section>

	<!-- Textarea & HTML Rendering Section -->
	<section class="mb-12">
		<div class="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-purple-500/30 p-8 shadow-xl shadow-purple-500/10">
			<div class="flex items-center gap-3 mb-6">
				<div class="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-xl">
					📝
				</div>
				<h2 class="text-2xl font-bold text-white">Textarea & Markdown</h2>
			</div>
			<p class="text-gray-300 mb-6">Bind textarea values and render HTML with <code class="px-2 py-1 bg-gray-700 rounded text-purple-400 font-mono text-sm">@html</code>:</p>
			
			<div class="bg-gray-900/50 rounded-xl p-6 border border-purple-500/20">
				<textarea 
					class="w-full bg-gray-800 border-2 border-purple-500/50 rounded-lg px-4 py-3 text-white h-32 resize-y focus:border-purple-400 focus:outline-none transition-colors duration-300 font-mono text-sm mb-6" 
					bind:value={markdownToShow}
					placeholder="Type markdown here..."
				></textarea>

				<div class="bg-purple-900/20 border border-purple-500/30 rounded-lg p-6">
					<p class="text-gray-400 text-sm font-mono mb-3">RENDERED MARKDOWN:</p>
					<div class="prose prose-invert max-w-none text-gray-200">
						{@html marked(markdownToShow)}
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Number & Range Binding Section -->
	<section class="mb-12">
		<div class="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-cyan-500/30 p-8 shadow-xl shadow-cyan-500/10">
			<div class="flex items-center gap-3 mb-6">
				<div class="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-xl">
					🔢
				</div>
				<h2 class="text-2xl font-bold text-white">Number & Range Inputs</h2>
			</div>
			<p class="text-gray-300 mb-6">Bind numeric values and sync multiple inputs to the same state:</p>
			
			<div class="bg-gray-900/50 rounded-xl p-8 border border-cyan-500/20">
				<div class="flex flex-col md:flex-row items-center justify-center gap-6">
					<div>
						<label class="block text-gray-400 text-sm font-mono mb-2">Number Input:</label>
						<input 
							type="number" 
							bind:value={scoops} 
							class="w-32 bg-gray-800 border-2 border-cyan-500/50 rounded-lg px-4 py-3 text-white text-center focus:border-cyan-400 focus:outline-none transition-colors duration-300" 
							min="1" 
							max="3" 
						/>
					</div>
					<div class="flex-1 max-w-md">
						<label class="block text-gray-400 text-sm font-mono mb-2">Range Slider:</label>
						<input
							type="range"
							bind:value={scoops}
							class="w-full h-3 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-cyan-500"
							min="1"
							max="3"
							step="1"
						/>
					</div>
					<div class="bg-cyan-900/20 border border-cyan-500/30 rounded-lg px-6 py-4">
						<p class="text-gray-400 text-xs font-mono mb-1">SCOOPS</p>
						<p class="text-4xl font-bold text-cyan-400 font-mono">{scoops}</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- InsecureQuestion Component -->
	<section class="mb-12">
		<div class="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-yellow-500/30 p-8 shadow-xl shadow-yellow-500/10">
			<div class="flex items-center gap-3 mb-6">
				<div class="w-10 h-10 rounded-lg bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center text-xl">
					⚠️
				</div>
				<h2 class="text-2xl font-bold text-white">Component Binding Example</h2>
			</div>
			<InsecureQuestion />
		</div>
	</section>

	<!-- Ice Cream Form Section -->
	<section class="mb-12">
		<div class="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-green-500/30 p-8 shadow-xl shadow-green-500/10">
			<div class="flex items-center gap-3 mb-8">
				<div class="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-xl">
					🍦
				</div>
				<h2 class="text-2xl font-bold text-white">Complete Form Example</h2>
			</div>
			<p class="text-gray-300 mb-6">Combine radio buttons, checkboxes, and select inputs with validation:</p>
			
			<div class="bg-gradient-to-br from-green-900/20 to-emerald-900/20 rounded-xl p-8 border border-green-500/30">
				<form>
					<!-- Radio Buttons -->
					<div class="mb-8">
						<h3 class="text-xl font-semibold text-green-400 mb-4">Number of Scoops</h3>
						<div class="flex gap-4">
							{#each [1, 2, 3] as scoopNum}
								<label class="flex items-center gap-2 bg-gray-800/50 px-4 py-3 rounded-lg border border-green-500/30 cursor-pointer hover:border-green-400/50 transition-colors duration-300">
									<input 
										class="w-5 h-5 accent-green-500 cursor-pointer" 
										type="radio" 
										value={scoopNum} 
										bind:group={scoops} 
									/>
									<span class="text-white font-semibold">{scoopNum} Scoop{scoopNum > 1 ? 's' : ''}</span>
								</label>
							{/each}
						</div>
					</div>

					<!-- Checkboxes -->
					<div class="mb-8">
						<h3 class="text-xl font-semibold text-green-400 mb-4">Select Flavors</h3>
						<div class="grid md:grid-cols-3 gap-4 mb-4">
							{#each availableFlavors as flavor}
								<label class="flex items-center gap-3 bg-gray-800/50 px-4 py-3 rounded-lg border border-green-500/30 cursor-pointer hover:border-green-400/50 transition-colors duration-300">
									<input 
										class="w-5 h-5 accent-green-500 cursor-pointer" 
										type="checkbox" 
										value={flavor} 
										bind:group={flavors} 
									/>
									<span class="text-white font-semibold">{flavor}</span>
								</label>
							{/each}
						</div>

						<!-- Validation Messages -->
						{#if flavors.length === 0}
							<div class="bg-red-500/20 border border-red-500/50 rounded-lg p-4 flex items-center gap-3">
								<span class="text-2xl">❌</span>
								<p class="text-red-400 font-semibold">You must select at least one flavor!</p>
							</div>
						{:else if flavors.length > scoops}
							<div class="bg-red-500/20 border border-red-500/50 rounded-lg p-4 flex items-center gap-3">
								<span class="text-2xl">⚠️</span>
								<p class="text-red-400 font-semibold">You can only select {scoops} flavor{scoops > 1 ? 's' : ''}!</p>
							</div>
						{/if}
					</div>

					<!-- Select Multiple -->
					<div class="mb-8">
						<h3 class="text-xl font-semibold text-green-400 mb-4">Alternative: Multi-Select</h3>
						<select 
							class="w-full bg-gray-800 border-2 border-green-500/50 rounded-lg px-4 py-3 text-white focus:border-green-400 focus:outline-none transition-colors duration-300" 
							multiple 
							bind:value={flavors}
							size="3"
						>
							{#each availableFlavors as flavor}
								<option value={flavor} class="py-2">{flavor}</option>
							{/each}
						</select>
					</div>

					<!-- Order Summary -->
					<div class="bg-green-900/30 border border-green-500/50 rounded-lg p-6">
						<h3 class="text-xl font-semibold text-green-400 mb-3">Your Order</h3>
						<p class="text-white text-lg">
							<span class="text-green-400 font-bold">{scoops}</span> scoop{scoops > 1 ? 's' : ''} of 
							<span class="text-green-400 font-bold">{flavors.length > 0 ? flavors.join(', ') : 'nothing selected'}</span>
						</p>
					</div>
				</form>
			</div>
		</div>
	</section>

	<!-- Key Concepts -->
	<section class="mb-12">
		<div class="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-orange-500/30 p-8 shadow-xl shadow-orange-500/10">
			<div class="flex items-center gap-3 mb-6">
				<div class="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-xl">
					💡
				</div>
				<h2 class="text-2xl font-bold text-white">Binding Types</h2>
			</div>
			
			<div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
				<div class="bg-gray-900/50 rounded-lg p-5 border border-orange-500/20">
					<h4 class="font-semibold text-orange-400 mb-2">bind:value</h4>
					<p class="text-gray-300 text-sm">Text inputs, numbers, textareas</p>
				</div>
				<div class="bg-gray-900/50 rounded-lg p-5 border border-orange-500/20">
					<h4 class="font-semibold text-orange-400 mb-2">bind:group</h4>
					<p class="text-gray-300 text-sm">Radio buttons and checkboxes</p>
				</div>
				<div class="bg-gray-900/50 rounded-lg p-5 border border-orange-500/20">
					<h4 class="font-semibold text-orange-400 mb-2">bind:checked</h4>
					<p class="text-gray-300 text-sm">Single checkbox state</p>
				</div>
				<div class="bg-gray-900/50 rounded-lg p-5 border border-orange-500/20">
					<h4 class="font-semibold text-orange-400 mb-2">Two-way sync</h4>
					<p class="text-gray-300 text-sm">Automatic state synchronization</p>
				</div>
			</div>
		</div>
	</section>
</div>
