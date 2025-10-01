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
		{ href: '/tutorial/bindings', label: 'Bindings', icon: '🔄' }
	];
</script>

<!-- Futuristic Navigation Header -->
<nav class="sticky top-0 z-50 backdrop-blur-lg bg-gray-900/95 border-b border-cyan-500/30 shadow-lg shadow-cyan-500/10">
	<div class="max-w-7xl mx-auto px-4 py-3">
		<ul class="flex flex-wrap items-center justify-center gap-2 md:gap-4">
			{#each navItems as item}
				<li>
					<a 
						href={item.href}
						class="group relative px-4 py-2 rounded-lg font-mono text-sm transition-all duration-300
							{$page.url.pathname === item.href 
								? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/50' 
								: 'text-gray-300 hover:text-white hover:bg-gray-800/50'}"
					>
						<span class="mr-2">{item.icon}</span>
						<span class="hidden sm:inline">{item.label}</span>
						
						{#if $page.url.pathname !== item.href}
							<span class="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
						{/if}
					</a>
				</li>
			{/each}
		</ul>
	</div>
</nav>

<!-- Main Content Area with Background -->
<div class="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative">
	<!-- Subtle Grid Background -->
	<div class="absolute inset-0 opacity-5 z-0"
		style="background-image: linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px); background-size: 50px 50px;">
	</div>
	
	<!-- Content -->
	<div class="relative z-10">
		{@render children?.()}
	</div>
</div>


