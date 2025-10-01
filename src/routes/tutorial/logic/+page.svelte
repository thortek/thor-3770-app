<script lang="ts">
	import Counter from '$lib/components/Counter.svelte';
	import { counter } from '$lib/global/globalCount.svelte';
	import { faker } from '@faker-js/faker';
	import { Switch } from '@skeletonlabs/skeleton-svelte';
    import { getRandomNumber } from '$lib/utils/delayFunction';
    import { ProgressRing } from '@skeletonlabs/skeleton-svelte';

	let visibleState = $state(false);
	let promise = getRandomNumber();

	const twentyFiveAvatars = [...Array(25)].map(() => {
		const fullName = faker.person.fullName();
		const avatarUrl = faker.image.avatar();
		return { fullName, avatarUrl };
	});
</script>

<!-- Page Header -->
<div class="max-w-6xl mx-auto px-6 py-12">
	<div class="text-center mb-12">
		<div class="inline-block">
			<div class="flex items-center gap-3 mb-4">
				<span class="text-6xl">🧠</span>
				<h1 class="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
					Logic in Svelte
				</h1>
			</div>
			<p class="text-gray-400 text-lg font-mono">Conditional rendering, loops, and async patterns</p>
		</div>
	</div>

	<!-- Conditional Rendering Section -->
	<section class="mb-12">
		<div class="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-green-500/30 p-8 shadow-xl shadow-green-500/10">
			<div class="flex items-center gap-3 mb-6">
				<div class="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-xl">
					🔀
				</div>
				<h2 class="text-2xl font-bold text-white">Conditional Rendering</h2>
			</div>
			<p class="text-gray-300 mb-6">Use <code class="px-2 py-1 bg-gray-700 rounded text-green-400 font-mono text-sm">#if</code> blocks to conditionally render content:</p>
			
			<div class="bg-gray-900/50 rounded-xl p-6 border border-green-500/20">
				<div class="flex justify-center mb-6">
					<div class="w-64">
						<Counter />
					</div>
				</div>

				{#if counter.count > 10}
					<div class="text-center">
						<div class="inline-flex items-center gap-3 bg-green-500/20 border border-green-500/50 rounded-lg px-6 py-4">
							<span class="text-3xl">🎉</span>
							<p class="text-green-400 font-semibold text-lg">
								{counter.count} is greater than 10!
							</p>
						</div>
					</div>
				{/if}
			</div>
		</div>
	</section>

	<!-- Each Block with Toggle Section -->
	<section class="mb-12">
		<div class="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-purple-500/30 p-8 shadow-xl shadow-purple-500/10">
			<div class="flex items-center gap-3 mb-6">
				<div class="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-xl">
					👥
				</div>
				<h2 class="text-2xl font-bold text-white">Looping with #each</h2>
			</div>
			<p class="text-gray-300 mb-6">Iterate over arrays to render multiple elements dynamically:</p>
			
			<div class="bg-gray-900/50 rounded-xl p-6 border border-purple-500/20">
				<div class="flex items-center justify-center gap-4 mb-6">
					<label class="flex items-center gap-3 cursor-pointer">
						<span class="text-gray-300 font-semibold">Show Avatars</span>
						<Switch
							name="avatarSwitch"
							checked={visibleState}
							onCheckedChange={(e) => (visibleState = !visibleState)}
						/>
					</label>
				</div>

				{#if visibleState}
					<div class="mb-4">
						<div class="flex items-center gap-3 justify-center bg-purple-500/20 border border-purple-500/50 rounded-lg px-6 py-3">
							<span class="text-2xl">✅</span>
							<p class="text-purple-400 font-semibold">Avatars are visible!</p>
						</div>
					</div>
					<div class="flex flex-wrap justify-center gap-4 p-4 bg-purple-900/10 rounded-lg">
						{#each twentyFiveAvatars as avatar}
							<div class="flex flex-col items-center gap-2 p-3 bg-gray-800/50 rounded-lg border border-purple-500/20 hover:border-purple-400/50 transition-all duration-300 transform hover:scale-105">
								<img
									src={avatar.avatarUrl}
									alt={avatar.fullName}
									class="h-16 w-16 rounded-full border-2 border-purple-500"
								/>
								<p class="text-sm font-medium text-gray-300 text-center max-w-[100px] truncate">{avatar.fullName}</p>
							</div>
						{/each}
					</div>
				{:else}
					<div class="flex items-center gap-3 justify-center bg-gray-700/20 border border-gray-600/50 rounded-lg px-6 py-4">
						<span class="text-2xl">👻</span>
						<p class="text-gray-400 font-semibold">Avatars are hidden</p>
					</div>
				{/if}
			</div>
		</div>
	</section>

	<!-- Await Block Section -->
	<section class="mb-12">
		<div class="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-cyan-500/30 p-8 shadow-xl shadow-cyan-500/10">
			<div class="flex items-center gap-3 mb-6">
				<div class="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-xl">
					⏳
				</div>
				<h2 class="text-2xl font-bold text-white">Async Patterns with #await</h2>
			</div>
			<p class="text-gray-300 mb-6">Handle promises elegantly with loading, success, and error states:</p>
			
			<div class="bg-gray-900/50 rounded-xl p-8 border border-cyan-500/20 flex flex-col items-center justify-center min-h-[200px]">
				{#await promise}
					<div class="text-center">
						<ProgressRing value={null} size="size-14" meterStroke="stroke-cyan-600-400" trackStroke="stroke-cyan-50-950" />
						<p class="text-cyan-400 font-mono mt-4">Loading random number...</p>
					</div>
				{:then number}
					<div class="text-center">
						<div class="inline-flex items-center gap-3 bg-cyan-500/20 border border-cyan-500/50 rounded-lg px-8 py-6">
							<span class="text-4xl">🎲</span>
							<div>
								<p class="text-gray-400 text-sm font-mono mb-1">RANDOM NUMBER</p>
								<p class="text-5xl font-bold text-cyan-400 font-mono">{number}</p>
							</div>
						</div>
					</div>
				{:catch error}
					<div class="text-center">
						<div class="inline-flex items-center gap-3 bg-red-500/20 border border-red-500/50 rounded-lg px-8 py-6">
							<span class="text-4xl">⚠️</span>
							<div>
								<p class="text-red-400 font-semibold mb-1">Error loading number</p>
								<p class="text-gray-400 text-sm">{error.message}</p>
							</div>
						</div>
					</div>
				{/await}
			</div>
		</div>
	</section>

	<!-- Key Concepts -->
	<section class="mb-12">
		<div class="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-orange-500/30 p-8 shadow-xl shadow-orange-500/10">
			<div class="flex items-center gap-3 mb-6">
				<div class="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-xl">
					📚
				</div>
				<h2 class="text-2xl font-bold text-white">Logic Blocks Summary</h2>
			</div>
			
			<div class="grid md:grid-cols-3 gap-4">
				<div class="bg-gray-900/50 rounded-lg p-5 border border-orange-500/20">
					<h4 class="font-semibold text-orange-400 mb-2">#if / #else</h4>
					<p class="text-gray-300 text-sm">Conditional rendering based on boolean expressions</p>
				</div>
				<div class="bg-gray-900/50 rounded-lg p-5 border border-orange-500/20">
					<h4 class="font-semibold text-orange-400 mb-2">#each</h4>
					<p class="text-gray-300 text-sm">Loop through arrays to render multiple items</p>
				</div>
				<div class="bg-gray-900/50 rounded-lg p-5 border border-orange-500/20">
					<h4 class="font-semibold text-orange-400 mb-2">#await</h4>
					<p class="text-gray-300 text-sm">Handle async operations with loading states</p>
				</div>
			</div>
		</div>
	</section>
</div>
