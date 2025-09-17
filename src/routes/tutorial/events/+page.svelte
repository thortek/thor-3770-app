<script lang="ts">

let m = $state({ x: 0, y: 0})

function handleMouseMove(event: MouseEvent) {
    m.x = event.clientX
    m.y = event.clientY
}


</script>

<div class="w-96 h-96 border" onpointermove={handleMouseMove}>
    The pointer is at {Math.round(m.x)} x {Math.round(m.y)}
</div>
