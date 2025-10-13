<script lang="ts">
	import { fade, fly, slide } from 'svelte/transition'

	let checkboxVisible = $state(true)
	let flyVisible = $state(true)
	let typewriterVisible = $state(false)
	let status = $state('waiting...')
	let statusVisible = $state(true)
	let items = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten']
	let showItems = $state(true)
	let i = $state(5)

	function typewriter(node: HTMLElement, { speed = 1 }) {
		const valid = node.childNodes.length === 1 && node.childNodes[0].nodeType === Node.TEXT_NODE

		if (!valid) {
			throw new Error(`This transition only works on elements with a single text node child`)
		}

		const text = node.textContent
		const duration = text.length / (speed * 0.01)

		return {
			duration,
			tick: (t: number) => {
				const i = Math.trunc(text.length * t)
				node.textContent = text.slice(0, i)
			}
		}
	}
</script>

<div class="m-4 flex flex-col items-center gap-4 p-4">
	<div class="flex gap-4">
		<div>
			<label class="flex items-center gap-2">
				<input type="checkbox" class="checkbox" bind:checked={checkboxVisible} />
				Show Thor mowing the lawn
			</label>
			{#if checkboxVisible}
				<img
					src="/thor_lawn_mowing.jpg"
					alt="Thor mowing the lawn"
					class="h-[400px] rounded-lg shadow-lg"
					transition:fade
				/>
			{/if}
		</div>
		<div>
			<label class="flex items-center gap-2">
				<input type="checkbox" class="checkbox" bind:checked={flyVisible} />
				Show Bizzaro Squidward
			</label>
			{#if flyVisible}
				<img
					src="/weeding_but_Thor.jpg"
					alt="Weeding but it's Thor"
					class="h-[400px] rounded-lg shadow-lg"
					in:fly={{ y: 200, duration: 2000 }}
					out:fade
				/>
			{/if}
		</div>
	</div>
	<label>
		<input type="checkbox" bind:checked={typewriterVisible} />
		Typewriter effect visible
	</label>

	{#if typewriterVisible}
		<p class="rounded-xl border p-1 shadow-lg" transition:typewriter={{ speed: 2 }}>
			The quick brown fox jumps over the lazy dog
		</p>
	{/if}
	<hr class="w-1/2" />
	<label>
		<input type="checkbox" bind:checked={statusVisible} />
		Status message state: {status}
	</label>

	{#if statusVisible}
		<p
			transition:fly={{ x: 400, duration: 1000 }}
			onintrostart={() => (status = 'intro started')}
			onoutrostart={() => (status = 'outro started')}
			onintroend={() => (status = 'intro ended')}
			onoutroend={() => (status = 'outro ended')}
		>
			Flies in and out
		</p>
	{/if}
	<hr class="w-1/2" />
	<label>
		<input type="checkbox" bind:checked={showItems} />
		show list
	</label>

	<label>
		<input type="range" bind:value={i} max="10" />
	</label>

	{#if showItems}
		{#each items.slice(0, i) as item}
			<div class="w-1/2 border-t border-gray-200 p-0.5 text-center" transition:slide|global>
				{item}
			</div>
		{/each}
	{/if}
</div>
