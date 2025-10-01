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
		<div class="flex items-center justify-center gap-3 mb-4">
			<span class="text-6xl">🧠</span>
			<h1 class="text-5xl font-bold">Logic in Svelte</h1>
		</div>
		<p class="text-surface-600-400 text-lg">Conditional rendering, loops, and async patterns</p>
	</div>

	<!-- Conditional Rendering Section -->
	<section class="mb-12">
		<div class="card preset-filled p-8">
			<div class="flex items-center gap-3 mb-6">
				<span class="text-4xl">🔀</span>
				<h2 class="text-3xl font-bold">Conditional Rendering</h2>
			</div>
			<p class="text-surface-600-400 mb-6">Use <code class="code">#if</code> blocks to conditionally render content:</p>
			
			<div class="card preset-tonal p-6">
				<div class="flex justify-center mb-6">
					<div class="w-64">
						<Counter />
					</div>
				</div>

				{#if counter.count > 10}
					<div class="text-center">
						<div class="inline-flex items-center gap-3 card preset-filled-primary-500 px-6 py-4">
							<span class="text-3xl">🎉</span>
							<p class="font-semibold text-lg">
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
		<div class="card preset-filled p-8">
			<div class="flex items-center gap-3 mb-6">
				<span class="text-4xl">👥</span>
				<h2 class="text-3xl font-bold">Looping with #each</h2>
			</div>
			<p class="text-surface-600-400 mb-6">Iterate over arrays to render multiple elements dynamically:</p>
			
			<div class="card preset-tonal p-6">
				<div class="flex items-center justify-center gap-4 mb-6">
					<label class="flex items-center gap-3 cursor-pointer">
						<span class="font-semibold">Show Avatars</span>
						<Switch
							name="avatarSwitch"
							checked={visibleState}
							onCheckedChange={(e) => (visibleState = !visibleState)}
						/>
					</label>
				</div>

				{#if visibleState}
					<div class="mb-4 text-center">
						<span class="inline-flex items-center gap-2 text-primary-500 font-semibold">
							<span class="text-2xl">✅</span>
							Avatars are visible!
						</span>
					</div>
					<div class="flex flex-wrap justify-center gap-4 p-4">
						{#each twentyFiveAvatars as avatar}
							<div class="flex flex-col items-center gap-2 p-3 card preset-outlined hover:preset-tonal transition-all duration-300">
								<img
									src={avatar.avatarUrl}
									alt={avatar.fullName}
									class="h-16 w-16 rounded-full"
								/>
								<p class="text-sm font-medium text-center max-w-[100px] truncate">{avatar.fullName}</p>
							</div>
						{/each}
					</div>
				{:else}
					<div class="text-center">
						<span class="inline-flex items-center gap-2 text-surface-600-400 font-semibold">
							<span class="text-2xl">👻</span>
							Avatars are hidden
						</span>
					</div>
				{/if}
			</div>
		</div>
	</section>

	<!-- Await Block Section -->
	<section class="mb-12">
		<div class="card preset-filled p-8">
			<div class="flex items-center gap-3 mb-6">
				<span class="text-4xl">⏳</span>
				<h2 class="text-3xl font-bold">Async Patterns with #await</h2>
			</div>
			<p class="text-surface-600-400 mb-6">Handle promises elegantly with loading, success, and error states:</p>
			
			<div class="card preset-tonal p-8 flex flex-col items-center justify-center min-h-[200px]">
				{#await promise}
					<div class="text-center">
						<ProgressRing value={null} size="size-14" />
						<p class="text-primary-500 font-mono mt-4">Loading random number...</p>
					</div>
				{:then number}
					<div class="text-center">
						<span class="text-4xl mb-4 block">🎲</span>
						<p class="text-surface-600-400 text-sm font-mono mb-1">RANDOM NUMBER</p>
						<p class="text-5xl font-bold text-primary-500 font-mono">{number}</p>
					</div>
				{:catch error}
					<div class="text-center">
						<span class="text-4xl mb-4 block">⚠️</span>
						<p class="text-error-500 font-semibold mb-1">Error loading number</p>
						<p class="text-surface-600-400 text-sm">{error.message}</p>
					</div>
				{/await}
			</div>
		</div>
	</section>

	<!-- Key Concepts -->
	<section class="mb-12">
		<div class="card preset-filled p-8">
			<div class="flex items-center gap-3 mb-6">
				<span class="text-4xl">📚</span>
				<h2 class="text-3xl font-bold">Logic Blocks Summary</h2>
			</div>
			
			<div class="grid md:grid-cols-3 gap-4">
				<div class="card preset-tonal p-5">
					<h4 class="font-semibold mb-2">#if / #else</h4>
					<p class="text-surface-600-400 text-sm">Conditional rendering based on boolean expressions</p>
				</div>
				<div class="card preset-tonal p-5">
					<h4 class="font-semibold mb-2">#each</h4>
					<p class="text-surface-600-400 text-sm">Loop through arrays to render multiple items</p>
				</div>
				<div class="card preset-tonal p-5">
					<h4 class="font-semibold mb-2">#await</h4>
					<p class="text-surface-600-400 text-sm">Handle async operations with loading states</p>
				</div>
			</div>
		</div>
	</section>
</div>
