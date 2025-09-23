<script lang="ts">
    import InsecureQuestion from "$lib/components/InsecureQuestion.svelte";

	let name = $state('world')
	let htmlToShow = $state('<b>bold</b> and <i>italic</i> text')

    let scoops = $state(1)
</script>

<label class="label">
    <input type="number" bind:value={scoops} class="input w-24" min="1" max="3" />  Scoops
    <input type="range" bind:value={scoops} class="range range-primary w-48 mx-4" min="1" max="3" step="1" />   
</label>
<div>
	<input class="m-2 input w-32" type="text" bind:value={name} />
	<textarea class="m-2 textarea h-32 w-64" bind:value={htmlToShow}></textarea>

	<h1>Hello {name}!</h1>
	<div>{@html htmlToShow}</div>
</div>

<InsecureQuestion />

<div class="card m-4 p-4 w-2/3 mx-auto bg-green-100">
    <h2>Ice Cream Selection</h2>
    <form>
        {#each [1, 2, 3] as scoopNum}
        <label class="label">
            <input class="radio" type="radio" bind:value={scoops}/>
            {scoopNum} Scoop{scoopNum > 1 ? 's' : ''}
        </label>
        {/each}
    </form>
</div>