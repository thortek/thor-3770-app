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
		<div class="flex items-center justify-center gap-3 mb-4">
			<span class="text-6xl">🔗</span>
			<h1 class="text-5xl font-bold">Props in Svelte</h1>
		</div>
		<p class="text-surface-600-400 text-lg">Learn component communication through props</p>
	</div>

	<!-- Introduction Section -->
	<section class="mb-12">
		<div class="card preset-filled p-8">
			<div class="flex items-center gap-3 mb-6">
				<span class="text-4xl">📖</span>
				<h2 class="text-3xl font-bold">What are Props?</h2>
			</div>
			<p class="text-surface-600-400 text-lg leading-relaxed">
				Props are a way to pass data from a parent component to a child component. In Svelte 5, props are
				declared using the <code class="code">$props()</code> rune.
			</p>
		</div>
	</section>

	<!-- Code Example Section -->
	<section class="mb-12">
		<div class="card preset-filled p-8">
			<div class="flex items-center gap-3 mb-6">
				<span class="text-4xl">💻</span>
				<h2 class="text-3xl font-bold">Child Component Example</h2>
			</div>
			<p class="text-surface-600-400 mb-6">Here's how you define props in a child component with default values:</p>
			
			<div class="card preset-tonal overflow-hidden">
				<CodeBlock code={exampleHtml} lang="html" />
			</div>
		</div>
	</section>

	<!-- Live Example Section -->
	<section class="mb-12">
		<div class="card preset-filled p-8">
			<div class="flex items-center gap-3 mb-6">
				<span class="text-4xl">🎮</span>
				<h2 class="text-3xl font-bold">Interactive Examples</h2>
			</div>
			
			<!-- With Prop -->
			<div class="mb-8">
				<div class="flex items-center gap-3 mb-4">
					<span class="text-2xl">✅</span>
					<h3 class="text-xl font-semibold">Passing a Prop</h3>
				</div>
				<p class="text-surface-600-400 mb-4">
					When we pass the <code class="code">name</code> prop, the component uses it:
				</p>
				<div class="card preset-tonal p-6">
					<Child {name} />
				</div>
			</div>

			<!-- Without Prop -->
			<div>
				<div class="flex items-center gap-3 mb-4">
					<span class="text-2xl">🔧</span>
					<h3 class="text-xl font-semibold">Using Default Value</h3>
				</div>
				<p class="text-surface-600-400 mb-4">
					When no prop is passed, the default value (<code class="code">'Thor'</code>) is used:
				</p>
				<div class="card preset-tonal p-6">
					<Child />
				</div>
			</div>
		</div>
	</section>

	<!-- Key Concepts -->
	<section class="mb-12">
		<div class="card preset-filled p-8">
			<div class="flex items-center gap-3 mb-6">
				<span class="text-4xl">💡</span>
				<h2 class="text-3xl font-bold">Key Concepts</h2>
			</div>
			
			<div class="grid md:grid-cols-2 gap-4">
				<div class="card preset-tonal p-5">
					<h4 class="font-semibold mb-2">🎯 Props Flow Down</h4>
					<p class="text-surface-600-400 text-sm">Data flows from parent to child components</p>
				</div>
				<div class="card preset-tonal p-5">
					<h4 class="font-semibold mb-2">🔒 Type Safety</h4>
					<p class="text-surface-600-400 text-sm">TypeScript ensures props are used correctly</p>
				</div>
				<div class="card preset-tonal p-5">
					<h4 class="font-semibold mb-2">⚙️ Default Values</h4>
					<p class="text-surface-600-400 text-sm">Props can have fallback default values</p>
				</div>
				<div class="card preset-tonal p-5">
					<h4 class="font-semibold mb-2">🔄 Reactive Updates</h4>
					<p class="text-surface-600-400 text-sm">Changes to props automatically update the UI</p>
				</div>
			</div>
		</div>
	</section>
</div>