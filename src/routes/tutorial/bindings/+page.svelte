<script lang="ts">
    import { marked } from 'marked'
	import InsecureQuestion from '$lib/components/InsecureQuestion.svelte'

	let name = $state('world')
	let markdownToShow = $state(`Here is *italics* and **bold** \n\n - And a list item \n\n - Another list item`)

	let scoops = $state(1)
	let availableFlavors = $state(['Vanilla', 'Chocolate', 'Strawberry'])
    let flavors = $state([] as string[])
</script>

<label class="label">
	<input type="number" bind:value={scoops} class="input w-24" min="1" max="3" /> Scoops
	<input
		type="range"
		bind:value={scoops}
		class="range range-primary mx-4 w-48"
		min="1"
		max="3"
		step="1"
	/>
</label>
<div>
	<input class="m-2 input w-32" type="text" bind:value={name} />
	<textarea class="m-2 textarea h-32 w-64" bind:value={markdownToShow}></textarea>

	<h1>Hello {name}!</h1>
	<div>{@html marked(markdownToShow)}</div>
</div>

<InsecureQuestion />

<div class="m-4 mx-auto w-2/3 card bg-green-100 p-4">
	<h2>Ice Cream Selection</h2>
	<form>
		{#each [1, 2, 3] as scoopNum}
			<label class="label">
				<input class="radio" type="radio" value={scoopNum} bind:group={scoops} />
				{scoopNum} Scoop{scoopNum > 1 ? 's' : ''}
			</label>
		{/each}

		<h2>Flavors</h2>

      
		{#each availableFlavors as flavor}
			<label class="label">
				<input class="checkbox" type="checkbox" value={flavor} bind:group={flavors} />
				{flavor}
			</label>
		{/each}

		{#if flavors.length === 0}
			<p class="text-red-600">You must select at least one flavor!</p>
		{:else if flavors.length > scoops}
			<p class="text-red-600">You can only select {scoops} flavor{scoops > 1 ? 's' : ''}!</p>
		{/if}

        <select class="select w-32" multiple bind:value={flavors}>
            {#each availableFlavors as flavor}
                <option value={flavor}>{flavor}</option>
            {/each}
        </select>
       

		<p class="mt-4">You ordered {scoops} scoop{scoops > 1 ? 's' : ''} of {flavors.join(', ')}</p>
	</form>
</div>
