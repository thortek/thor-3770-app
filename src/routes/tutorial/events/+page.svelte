<script lang="ts">
	import BigGreenButton from '$lib/components/BigGreenButton.svelte'
	import Stepper from '$lib/components/Stepper.svelte'

	let stepValue = $state(0)
	let m = $state({ x: 0, y: 0 })

	function handleMouseMove(event: MouseEvent) {
		m.x = event.clientX
		m.y = event.clientY
	}

	function honk() {
		alert('Honk!')
	}
</script>

<div class="flex">
	<div class="h-96 w-96 border" onpointermove={handleMouseMove}>
		The pointer is at {Math.round(m.x)} x {Math.round(m.y)}
	</div>
	<div class="m-8 flex flex-col" onkeydown={(e) => alert(`<div> ${e.key}`)} role="presentation">
		<p class="m-2">
			Click here and press any key. Input is set to ket the keydown event in the bubbling phase
			(default)
		</p>
		<input class="m-8 bg-red-50" onkeydown={(e) => alert(`<input> ${e.key}`)} />

		<p class="m-2">Step value: {stepValue}</p>
		<Stepper twClass="m-2" increment={() => (stepValue += 1)} decrement={() => (stepValue -= 1)} />

		<BigGreenButton onclick={honk} />
	</div>
</div>
