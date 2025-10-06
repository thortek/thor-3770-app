<script lang="ts">
	import { text } from "@sveltejs/kit"

let flipped = $state(false)
let rotation = $state(0)
let cardColor = $state('#fef3c7')
</script>

<div class="flex flex-col gap-4 h-full items-center justify-center [perspective:100vh]">
    <h2 class="text-2xl font-bold">Class & Style Directives</h2>
    
    <!-- Example 1: class: directive with 3D card flip -->
    <div class="flex flex-col items-center gap-2">
        <p class="text-sm">Toggle conditional classes</p>
        <button 
            class="relative text-9xl h-80 w-[15rem] border-2 rounded-2xl transition-transform duration-700 [transform-style:preserve-3d]"
            class:bg-amber-300={flipped}
            class:text-blue-300={flipped}
            class:[transform:rotateY(180deg)]={flipped}
            onclick={() => flipped = !flipped}>
            <div class="front absolute inset-0 [backface-visibility:hidden]">
                <span class="symbol">♠</span>
            </div>
            <div class="back absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                <div class="pattern"></div>
            </div>
        </button>
    </div>

    <!-- Example 2: style: directive with dynamic rotation -->
    <div class="flex flex-col items-center gap-2">
        <p class="text-sm">Dynamic rotation with style: directive</p>
        <div class="flex gap-2">
            <button 
                class="btn variant-filled-primary"
                onclick={() => rotation -= 45}>
                ↺ Left
            </button>
            <button 
                class="btn variant-filled-primary"
                onclick={() => rotation += 45}>
                Right ↻
            </button>
            <button 
                class="btn variant-filled-secondary"
                onclick={() => rotation = 0}>
                Reset
            </button>
        </div>
        <div 
            class="w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg shadow-lg flex items-center justify-center text-white font-bold text-2xl transition-transform duration-300"
            style:transform="rotate({rotation}deg)">
            {rotation}°
        </div>
    </div>

    <!-- Example 3: style: directive with color picker -->
    <div class="flex flex-col items-center gap-2">
        <p class="text-sm">Dynamic background color</p>
        <input 
            type="color" 
            bind:value={cardColor}
            class="w-20 h-10 cursor-pointer" />
        <div 
            class="w-48 h-32 rounded-lg shadow-lg flex items-center justify-center text-lg font-semibold transition-colors duration-300"
            style:background-color={cardColor}>
            Pick a color!
        </div>
        <code class="text-xs">{cardColor}</code>
    </div>
</div>