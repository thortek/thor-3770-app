<script lang="ts">
	import '../app.css'
	import favicon from '$lib/assets/favicon.svg'
	import { setAuthState } from '$lib/global/globalState.svelte'

	// Get data from +layout.server.ts
	let { data, children } = $props()
	
	// Update auth state when data changes
	$effect(() => {
		setAuthState(data.user, data.isAuthenticated)
	})
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children?.()}
