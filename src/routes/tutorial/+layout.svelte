<script lang="ts">
	import { page } from '$app/stores';
	let { children } = $props();

	const navItems = [
		{ href: '/', label: 'Home', icon: '🏠' },
		{ href: '/tutorial', label: 'Tutorial Home', icon: '📚' },
		{ href: '/tutorial/reactivity', label: 'Reactivity', icon: '⚡' },
		{ href: '/tutorial/props', label: 'Props', icon: '🔗' },
		{ href: '/tutorial/logic', label: 'Logic', icon: '🧠' },
		{ href: '/tutorial/events', label: 'Events', icon: '🎯' },
		{ href: '/tutorial/bindings', label: 'Bindings', icon: '🔄' },
		{ href: '/tutorial/classes-styles', label: 'Classes & Styles', icon: '🎨' },
		{ href: '/tutorial/motion', label: 'Motion', icon: '✨' }
	];
</script>

<!-- Navigation Header -->
<nav class="sticky top-0 z-50 backdrop-blur-lg bg-surface-100-950 border-b border-surface-300-700 shadow-lg">
	<div class="max-w-7xl mx-auto px-4 py-3">
		<ul class="flex flex-wrap items-center justify-center gap-2 md:gap-4">
			{#each navItems as item}
				<li>
					<a 
						href={item.href}
						class="px-4 py-2 rounded-lg font-mono text-sm transition-all duration-200
							{$page.url.pathname === item.href 
								? 'preset-filled-primary-500 shadow-lg' 
								: 'preset-outlined hover:preset-tonal'}"
					>
						<span class="mr-2">{item.icon}</span>
						<span class="hidden sm:inline">{item.label}</span>
					</a>
				</li>
			{/each}
		</ul>
	</div>
</nav>

<!-- Main Content Area -->
<div class="min-h-screen bg-surface-50-950">
	{@render children?.()}
</div>


