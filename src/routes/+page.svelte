<script lang="ts">
	import { onMount } from 'svelte'
	import { authState } from '$lib/global/globalState.svelte'

	let mounted = $state(false)
	let particles = $state([] as Array<{ id: number; x: number; y: number; speed: number }>)

	onMount(() => {
		mounted = true
		// Initialize particles for animation
		const newParticles = []
		for (let i = 0; i < 50; i++) {
			newParticles.push({
				id: i,
				x: Math.random() * 100,
				y: Math.random() * 100,
				speed: Math.random() * 2 + 0.5
			})
		}
		particles = newParticles
	})

	const tutorialSections = [
		{
			title: 'Reactivity',
			description: "Master Svelte's reactive magic",
			icon: '⚡',
			href: '/tutorial/reactivity',
			color: 'from-cyan-500 to-blue-500'
		},
		{
			title: 'Props',
			description: 'Component communication patterns',
			icon: '🔗',
			href: '/tutorial/props',
			color: 'from-purple-500 to-pink-500'
		},
		{
			title: 'Logic',
			description: 'Conditional rendering & loops',
			icon: '🧠',
			href: '/tutorial/logic',
			color: 'from-green-500 to-emerald-500'
		},
		{
			title: 'Events',
			description: 'Handle user interactions & events',
			icon: '🎯',
			href: '/tutorial/events',
			color: 'from-orange-500 to-red-500'
		},
		{
			title: 'Bindings',
			description: 'Two-way data binding mastery',
			icon: '🔄',
			href: '/tutorial/bindings',
			color: 'from-indigo-500 to-violet-500'
		}
	]
</script>

<!-- Futuristic Control Panel Home Page -->
<div class="relative min-h-screen overflow-hidden bg-gray-900">
	<!-- Animated Grid Background -->
	{#if mounted}
		<div class="absolute inset-0 z-0 opacity-20">
			<div class="grid h-full w-full grid-cols-12 grid-rows-12">
				{#each Array(144) as _, i}
					<div
						class="border border-cyan-500/30"
						style="animation: pulse 2s ease-in-out infinite; animation-delay: {i * 100}ms;"
					></div>
				{/each}
			</div>
		</div>
	{/if}

	<!-- Floating Particles -->
	{#if mounted}
		<div class="absolute inset-0 z-0 overflow-hidden">
			{#each particles as particle}
				<div
					class="absolute h-2 w-2 rounded-full bg-cyan-400 opacity-60"
					style="left: {particle.x}%; top: {particle.y}%; animation: ping 3s ease-in-out infinite; animation-delay: {particle.id *
						100}ms;"
				></div>
			{/each}
		</div>
	{/if}

	<!-- Hero Section with Unsplash Background -->
	<section class="relative z-10 flex min-h-screen items-center justify-center">
		<!-- Background Image Overlay -->
		<div
			class="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-blue-900/80 to-purple-900/90"
		></div>
		<div
			class="absolute inset-0 bg-cover bg-center opacity-20"
			style="background-image: url('https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1920&h=1080&fit=crop&crop=center');"
		></div>

		<div class="relative z-20 mx-auto max-w-7xl px-6 py-20">
			<!-- Main Header -->
			<div class="mb-16 text-center">
				<!-- Enhanced Auth Buttons -->
				<div class="mb-8 flex justify-center gap-4">
					{#if authState.isAuthenticated}
						<!-- Logout Button - Only visible when authenticated -->
						<a href="/api/auth/logout" class="group relative">
							<div
								class="absolute -inset-1 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 opacity-50 blur transition duration-300 group-hover:opacity-75"
							></div>
							<button
								type="button"
								class="relative flex items-center gap-2 rounded-lg border border-orange-500/50 bg-gray-900 px-6 py-3 font-semibold text-white transition-all duration-300 hover:border-orange-400 hover:shadow-lg hover:shadow-orange-500/50"
							>
								<span class="text-xl">🚪</span>
								<span>Logout</span>
							</button>
						</a>
					{:else}
						<!-- Login Button - Only visible when NOT authenticated -->
						<a href="/api/auth/login" class="group relative">
							<div
								class="absolute -inset-1 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 opacity-50 blur transition duration-300 group-hover:opacity-75"
							></div>
							<button
								type="button"
								class="relative flex items-center gap-2 rounded-lg border border-cyan-500/50 bg-gray-900 px-6 py-3 font-semibold text-white transition-all duration-300 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/50"
							>
								<span class="text-xl">🔐</span>
								<span>Login</span>
							</button>
						</a>

						<!-- Register Button -->
						<a href="/api/auth/register" class="group relative">
							<div
								class="absolute -inset-1 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 opacity-50 blur transition duration-300 group-hover:opacity-75"
							></div>
							<button
								type="button"
								class="relative flex items-center gap-2 rounded-lg border border-purple-500/50 bg-gray-900 px-6 py-3 font-semibold text-white transition-all duration-300 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/50"
							>
								<span class="text-xl">📝</span>
								<span>Register</span>
							</button>
						</a>
					{/if}
				</div>
				<div
					class="mb-8 inline-block rounded-lg border border-cyan-500/50 bg-gray-900/50 p-4 backdrop-blur-sm"
				>
					<div
						class="mb-2 flex items-center justify-center space-x-2 font-mono text-sm text-cyan-400"
					>
						<span class="h-2 w-2 animate-pulse rounded-full bg-green-400"></span>
						<span>SYSTEM ONLINE</span>
						<span class="h-2 w-2 animate-pulse rounded-full bg-green-400"></span>
					</div>

					<h1
						class="mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-6xl font-black text-transparent md:text-8xl"
					>
						THOR DEV
					</h1>

					<div class="font-mono text-2xl text-gray-300 md:text-3xl">
						<span class="text-cyan-400">&gt;</span>
						Advanced Svelte Training Protocol
						<span class="animate-pulse text-cyan-400">_</span>
					</div>
				</div>

				<p class="mx-auto max-w-3xl text-xl leading-relaxed text-gray-400">
					Access comprehensive Svelte development training modules. Enhance your skills through
					interactive tutorials and hands-on coding experiences.
				</p>
			</div>

			<!-- Main Tutorial Access Portal -->
			<div class="mb-16 text-center">
				<a href="/tutorial" class="group relative inline-block">
					<div
						class="absolute -inset-2 rounded-2xl bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-60 blur-lg transition-opacity duration-500 group-hover:opacity-100"
					></div>
					<div
						class="relative rounded-2xl border-2 border-cyan-500/50 bg-gray-900 p-8 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400"
					>
						<div class="mb-4 text-6xl">🚀</div>
						<div class="mb-2 text-3xl font-bold text-white">ACCESS TUTORIALS</div>
						<div class="font-mono text-cyan-400">ENTER TRAINING PROTOCOL</div>

						<!-- Scanning line effect -->
						<div
							class="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent transition-transform duration-1000 ease-in-out group-hover:translate-x-[100%]"
						></div>
					</div>
				</a>
			</div>

			<!-- Tutorial Module Preview Cards -->
			<div class="grid gap-8 md:grid-cols-3">
				{#each tutorialSections as section}
					<a href={section.href} class="group relative block">
						<div
							class="absolute -inset-1 bg-gradient-to-r {section.color} rounded-xl opacity-25 blur transition duration-500 group-hover:opacity-75"
						></div>
						<div
							class="relative rounded-xl border border-gray-700 bg-gray-900/90 p-6 backdrop-blur-sm transition-all duration-300 hover:border-gray-500"
						>
							<!-- Module Status -->
							<div class="mb-4 flex items-center justify-between">
								<div class="text-3xl">{section.icon}</div>
								<div class="rounded bg-green-400/10 px-2 py-1 font-mono text-xs text-green-400">
									AVAILABLE
								</div>
							</div>

							<!-- Module Info -->
							<h3 class="mb-2 text-xl font-bold text-white">{section.title}</h3>
							<p class="mb-4 text-sm text-gray-400">{section.description}</p>

							<!-- Progress Bar -->
							<div class="mb-3 h-2 w-full rounded-full bg-gray-700">
								<div
									class="bg-gradient-to-r {section.color} h-2 w-0 rounded-full transition-all duration-1000 group-hover:w-full"
								></div>
							</div>

							<div class="font-mono text-sm text-cyan-400">&gt; INITIALIZE MODULE_</div>
						</div>
					</a>
				{/each}
			</div>

			<!-- System Stats -->
			<div class="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
				<div
					class="rounded-lg border border-gray-700 bg-gray-900/50 p-4 text-center backdrop-blur-sm"
				>
					<div class="text-2xl font-bold text-cyan-400">05</div>
					<div class="font-mono text-sm text-gray-400">MODULES</div>
				</div>
				<div
					class="rounded-lg border border-gray-700 bg-gray-900/50 p-4 text-center backdrop-blur-sm"
				>
					<div class="text-2xl font-bold text-purple-400">∞</div>
					<div class="font-mono text-sm text-gray-400">POSSIBILITIES</div>
				</div>
				<div
					class="rounded-lg border border-gray-700 bg-gray-900/50 p-4 text-center backdrop-blur-sm"
				>
					<div class="text-2xl font-bold text-green-400">100%</div>
					<div class="font-mono text-sm text-gray-400">REACTIVE</div>
				</div>
				<div
					class="rounded-lg border border-gray-700 bg-gray-900/50 p-4 text-center backdrop-blur-sm"
				>
					<div class="text-2xl font-bold text-pink-400">⚡</div>
					<div class="font-mono text-sm text-gray-400">FAST</div>
				</div>
			</div>
		</div>
	</section>
</div>

<!-- Custom Styles for Enhanced Effects -->
<style>
	@keyframes pulse {
		0%,
		100% {
			opacity: 1;
		}
		50% {
			opacity: 0.5;
		}
	}

	@keyframes ping {
		75%,
		100% {
			transform: scale(2);
			opacity: 0;
		}
	}

	.group:hover .group-hover\:w-full {
		width: 100%;
	}
</style>
