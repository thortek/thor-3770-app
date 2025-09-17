<script lang="ts">
  import { onMount } from 'svelte';
  
  let src = "PikaThorAnime.png";
  let heroElement: HTMLElement;
  let mounted = false;

  onMount(() => {
    mounted = true;
  });
</script>

<!-- Stunning Hero Section -->
<section 
  bind:this={heroElement}
  class="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900"
>

  <!-- Main Hero Content -->
  <div class="relative z-10 max-w-6xl mx-auto px-6 py-20">
    <div class="grid lg:grid-cols-2 gap-12 items-center">
      
      <!-- Left Content -->
      <div class="text-center lg:text-left space-y-8">
        <div class="space-y-4">
          <h1 class="text-5xl md:text-7xl font-black text-white leading-tight">
            Master
            <span class="block bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
              Svelte
            </span>
            <span class="block text-gray-200">Development</span>
          </h1>
          
          <p class="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl">
            Embark on an epic journey to learn modern web development with Svelte. 
            From reactive magic to component mastery - become the developer you were meant to be.
          </p>
        </div>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <a 
            href="/tutorial/reactivity" 
            class="btn variant-filled-primary text-lg px-8 py-4 rounded-xl shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300"
          >
            🚀 Start Learning
          </a>
          <a 
            href="/tutorial/props" 
            class="btn variant-outline-secondary text-lg px-8 py-4 rounded-xl border-2 border-white/20 text-white hover:bg-white/10 transform hover:scale-105 transition-all duration-300"
          >
            📚 Explore Topics
          </a>
        </div>

        <!-- Feature Tags -->
        <div class="flex flex-wrap gap-3 justify-center lg:justify-start">
          <span class="badge variant-soft-primary text-sm px-4 py-2">⚡ Reactive</span>
          <span class="badge variant-soft-secondary text-sm px-4 py-2">🎯 Component-Based</span>
          <span class="badge variant-soft-tertiary text-sm px-4 py-2">🔥 Modern</span>
          <span class="badge variant-soft-warning text-sm px-4 py-2">💪 Powerful</span>
        </div>
      </div>

      <!-- Right Content - Image -->
      <div class="relative">
        <div class="relative group">
          <!-- Glowing background effect -->
          <div class="absolute -inset-4 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
          
          <!-- Image container -->
          <div class="relative bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/20 shadow-2xl">
            <img 
              {src} 
              alt="Pikachu with Thor's Hammer - Your Development Journey Mascot" 
              class="w-full h-auto max-w-md mx-auto rounded-2xl shadow-lg transform group-hover:scale-105 transition-transform duration-500"
              class:animate-pulse={!mounted}
            />
            
            <!-- Floating elements around image -->
<!--             <div class="absolute -top-4 -right-4 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-2xl  shadow-lg">
              ⚡
            </div>
            <div class="absolute -bottom-4 -left-4 w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-2xl shadow-lg">
              🔨
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>


</section>

<!-- Additional CSS for custom animations -->
<!-- <style>
  
  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: .5;
    }
  }
  
  @keyframes bounce {
    0%, 100% {
      transform: translateY(-25%);
      animation-timing-function: cubic-bezier(0.8,0,1,1);
    }
    50% {
      transform: none;
      animation-timing-function: cubic-bezier(0,0,0.2,1);
    }
  }
</style> -->