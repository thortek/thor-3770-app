<script lang="ts">
    // Demonstration of passing props in Svelte
    import Child from '$lib/components/Child.svelte';
    import CodeBlock from '$lib/components/CodeBlock/CodeBlock.svelte';

    let name = 'Svelte';

    const exampleHtml = `<${'script'} lang='ts'>

    let { name = 'Thor' } = $props()

</${'script'}>

<p>Hello {name}!</p>`;
    
</script>

<!-- Page Header -->
<div class="max-w-6xl mx-auto px-6 py-12">
	<div class="text-center mb-12">
		<div class="inline-block">
			<div class="flex items-center gap-3 mb-4">
				<span class="text-6xl">🔗</span>
				<h1 class="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
					Props in Svelte
				</h1>
			</div>
			<p class="text-gray-400 text-lg font-mono">Learn component communication through props</p>
		</div>
	</div>

	<!-- Introduction Section -->
	<section class="mb-12">
		<div class="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-purple-500/30 p-8 shadow-xl shadow-purple-500/10">
			<div class="flex items-center gap-3 mb-6">
				<div class="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-xl">
					📖
				</div>
				<h2 class="text-2xl font-bold text-white">What are Props?</h2>
			</div>
			<p class="text-gray-300 text-lg leading-relaxed">
				Props are a way to pass data from a parent component to a child component. In Svelte 5, props are
				declared using the <code class="px-2 py-1 bg-gray-700 rounded text-purple-400 font-mono text-sm">$props()</code> rune.
			</p>
		</div>
	</section>

	<!-- Code Example Section -->
	<section class="mb-12">
		<div class="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-cyan-500/30 p-8 shadow-xl shadow-cyan-500/10">
			<div class="flex items-center gap-3 mb-6">
				<div class="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-xl">
					💻
				</div>
				<h2 class="text-2xl font-bold text-white">Child Component Example</h2>
			</div>
			<p class="text-gray-300 mb-6">Here's how you define props in a child component with default values:</p>
			
			<div class="bg-gray-900/80 rounded-xl overflow-hidden border border-cyan-500/20">
				<CodeBlock code={exampleHtml} lang="html" />
			</div>
		</div>
	</section>

	<!-- Live Example Section -->
	<section class="mb-12">
		<div class="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-green-500/30 p-8 shadow-xl shadow-green-500/10">
			<div class="flex items-center gap-3 mb-6">
				<div class="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-xl">
					🎮
				</div>
				<h2 class="text-2xl font-bold text-white">Interactive Examples</h2>
			</div>
			
			<!-- With Prop -->
			<div class="mb-8">
				<div class="flex items-center gap-3 mb-4">
					<span class="text-2xl">✅</span>
					<h3 class="text-xl font-semibold text-green-400">Passing a Prop</h3>
				</div>
				<p class="text-gray-300 mb-4">
					When we pass the <code class="px-2 py-1 bg-gray-700 rounded text-green-400 font-mono text-sm">name</code> prop, the component uses it:
				</p>
				<div class="bg-gray-900/50 rounded-xl p-6 border border-green-500/20">
					<Child {name} />
				</div>
			</div>

			<!-- Without Prop -->
			<div>
				<div class="flex items-center gap-3 mb-4">
					<span class="text-2xl">🔧</span>
					<h3 class="text-xl font-semibold text-blue-400">Using Default Value</h3>
				</div>
				<p class="text-gray-300 mb-4">
					When no prop is passed, the default value (<code class="px-2 py-1 bg-gray-700 rounded text-blue-400 font-mono text-sm">'Thor'</code>) is used:
				</p>
				<div class="bg-gray-900/50 rounded-xl p-6 border border-blue-500/20">
					<Child />
				</div>
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
				<h2 class="text-2xl font-bold text-white">Key Concepts</h2>
			</div>
			
			<div class="grid md:grid-cols-2 gap-4">
				<div class="bg-gray-900/50 rounded-lg p-5 border border-orange-500/20">
					<h4 class="font-semibold text-orange-400 mb-2">🎯 Props Flow Down</h4>
					<p class="text-gray-300 text-sm">Data flows from parent to child components</p>
				</div>
				<div class="bg-gray-900/50 rounded-lg p-5 border border-orange-500/20">
					<h4 class="font-semibold text-orange-400 mb-2">🔒 Type Safety</h4>
					<p class="text-gray-300 text-sm">TypeScript ensures props are used correctly</p>
				</div>
				<div class="bg-gray-900/50 rounded-lg p-5 border border-orange-500/20">
					<h4 class="font-semibold text-orange-400 mb-2">⚙️ Default Values</h4>
					<p class="text-gray-300 text-sm">Props can have fallback default values</p>
				</div>
				<div class="bg-gray-900/50 rounded-lg p-5 border border-orange-500/20">
					<h4 class="font-semibold text-orange-400 mb-2">🔄 Reactive Updates</h4>
					<p class="text-gray-300 text-sm">Changes to props automatically update the UI</p>
				</div>
			</div>
		</div>
	</section>
</div>