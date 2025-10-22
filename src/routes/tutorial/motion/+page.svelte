<script lang="ts">
	import { fade, fly, slide } from 'svelte/transition'
	import { Progress } from '@skeletonlabs/skeleton-svelte'
	import { Tween, Spring } from 'svelte/motion'
	import { cubicOut } from 'svelte/easing'
	import { flip } from 'svelte/animate'

	let checkboxVisible = $state(true)
	let flyVisible = $state(true)
	let typewriterVisible = $state(false)
	let status = $state('waiting...')
	let statusVisible = $state(true)
	let items = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten']
	let showItems = $state(true)
	let i = $state(5)

	let progress = $state(
		new Tween(0, {
			duration: 400,
			easing: cubicOut
		})
	)

	let coords = new Spring( { x: 50, y: 50 },
		{
			stiffness: 0.1,
			damping: 0.25
		}
	)

	let size = new Spring(10)

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

	let todos = $state([
		{ id: 1, text: 'Learn Svelte', completed: false },
		{ id: 2, text: 'Build a Svelte app', completed: false },
		{ id: 3, text: 'Master Svelte transitions', completed: false },
		{ id: 4, text: 'Contribute to Svelte community', completed: false },
		{ id: 5, text: 'Explore SvelteKit', completed: false }
	])

	function shuffle() {
		todos = todos.sort(() => Math.random() - 0.5)
	}
</script>

<div class="m-4 flex flex-col items-center gap-4 p-4">
	<div class="flex gap-4">
		<div class="w-72">
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
		<div class="w-72">
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
		<div class="m-4 flex flex-col items-center gap-2">
			<h2 class="text-lg font-bold">Todo List</h2>
			<button class="btn preset-filled-primary-950-50" type="button" onclick={shuffle}>
				Shuffle Todos
			</button>
			<ul>
				{#each todos as todo (todo.id)}
					<li
						class="my-2 rounded border p-2 shadow"
						animate:flip={{ duration: 600}}
					>
						{todo.text}
					</li>
				{/each}
			</ul>
		</div>
	</div>
	<div class="flex w-full gap-4">
		<div class="w-1/2 space-y-4 p-4">
			<label>
				<input type="checkbox" bind:checked={typewriterVisible} />
				Typewriter effect visible
			</label>

			{#if typewriterVisible}
				<p class="rounded-xl border p-1 shadow-lg" transition:typewriter={{ speed: 2 }}>
					The quick brown fox jumps over the lazy dog
				</p>
			{/if}
			<hr />
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
			<hr />
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
		<div class="w-1/2 space-y-4 p-4">
			<Progress value={progress.current} />
			<button
				class="btn preset-filled-primary-950-50"
				type="button"
				onclick={() => progress.set(0)}
			>
				0%
			</button>
			<button
				class="btn preset-filled-primary-950-50"
				type="button"
				onclick={() => progress.set(25)}
				>25%
			</button>
			<button
				class="btn preset-filled-primary-950-50"
				type="button"
				onclick={() => progress.set(50)}
			>
				50%
			</button>
			<button
				class="btn preset-filled-primary-950-50"
				type="button"
				onclick={() => progress.set(75)}
			>
				75%
			</button>
			<button
				class="btn preset-filled-primary-950-50"
				type="button"
				onclick={() => progress.set(100)}
			>
				100%
			</button>

			<div class="border">
				<svg
					class="top-0 left-0 h-full w-full"
					onmousemove={(e) => {
						const  {left, top} = e.currentTarget.getBoundingClientRect()
						coords.target = { x: e.clientX - left, y: e.clientY - top }
					}}
					onmousedown={() => (size.target = 30)}
					onmouseup={() => (size.target = 10)}
					role="presentation"
				>
					<circle cx={coords.current.x} cy={coords.current.y} r={size.current} />
				</svg>

				
			</div>
			<div class="w-48 select-none">
					<label>
						<h3>stiffness ({coords.stiffness})</h3>
						<input
							class="input"
							bind:value={coords.stiffness}
							type="range"
							min="0.01"
							max="1"
							step="0.01"
						/>
					</label>

					<label>
						<h3>damping ({coords.damping})</h3>
						<input
							class="input"
							bind:value={coords.damping}
							type="range"
							min="0.01"
							max="1"
							step="0.01"
						/>
					</label>
				</div>
		</div>
	</div>
</div>
