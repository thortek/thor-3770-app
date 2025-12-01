<script lang="ts">
	import '../app.css'
	import favicon from '$lib/assets/favicon.svg'
	import { setAuthState, authState } from '$lib/global/globalState.svelte'

	// Get data from +layout.server.ts
	let { data, children } = $props()

	// Update auth state when data changes
	$effect(() => {
		setAuthState(data.user, data.isAuthenticated)
	})

	// Dropdown state
	let dropdownOpen = $state(false)

	function toggleDropdown() {
		dropdownOpen = !dropdownOpen
	}

	// Close dropdown when clicking outside
	function handleClickOutside(event: MouseEvent) {
		const target = event.target as HTMLElement
		if (!target.closest('.avatar-dropdown')) {
			dropdownOpen = false
		}
	}
</script>

{#snippet userAvatar(user: typeof authState.user, size: 'sm' | 'md' | 'lg' = 'md')}
	{@const sizeClasses = {
		sm: 'h-8 w-8 text-sm',
		md: 'h-10 w-10 text-lg',
		lg: 'h-14 w-14 text-2xl'
	}}

	{#if user?.picture}
		<img
			src={user.picture}
			alt={user?.given_name || 'User'}
			class="{sizeClasses[
				size
			]} rounded-full border-2 border-cyan-500/50 object-cover transition-all duration-300 group-hover:border-cyan-400" />
	{:else}
		<div
			class="{sizeClasses[
				size
			]} flex items-center justify-center rounded-full border-2 border-cyan-500/50 bg-gradient-to-br from-cyan-500 to-purple-500 font-bold text-white transition-all duration-300 group-hover:border-cyan-400">
			{user?.given_name?.[0]?.toUpperCase() || '👤'}
		</div>
	{/if}
{/snippet}

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<svelte:document onclick={handleClickOutside} />

<!-- Futuristic Nav Bar -->
<nav class="fixed top-0 z-[100] w-full border-b border-cyan-500/30 bg-gray-900/95 backdrop-blur-sm">
	<div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
		<!-- Logo/Brand -->
		<a href="/" class="flex items-center gap-2">
			<span class="text-2xl">⚡</span>
			<span
				class="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-xl font-bold text-transparent">
				THOR DEV
			</span>
		</a>

		<!-- Auth UI -->
		<div class="flex items-center gap-4">
			{#if authState.isAuthenticated}
				<!-- Avatar Dropdown -->
				<div class="avatar-dropdown relative">
					<button
						onclick={toggleDropdown}
						class="group relative flex items-center gap-2 rounded-full transition-all duration-300 hover:ring-2 hover:ring-cyan-400/50"
						aria-label="User menu">
						{@render userAvatar(authState.user)}
					</button>

					<!-- Dropdown Menu -->
					{#if dropdownOpen}
						<div
							class="animate-in slide-in-from-top-2 fade-in absolute right-0 z-[110] mt-2 w-56 origin-top-right">
							<div
								class="rounded-lg border border-cyan-500/30 bg-gray-900/95 shadow-xl shadow-cyan-500/10 backdrop-blur-sm">
								<!-- User Info -->
								<div class="border-b border-cyan-500/20 px-4 py-3">
									<p class="text-sm font-semibold text-white">
										{authState.user?.given_name || 'User'}
									</p>
									{#if authState.user?.email}
										<p class="text-xs text-gray-400">
											{authState.user.email}
										</p>
									{/if}
								</div>

								<!-- Menu Items -->
								<div class="py-1">
									<a
										href="/api/auth/logout"
										class="flex items-center gap-2 px-4 py-2 text-sm text-gray-300 transition-colors hover:bg-red-500/10 hover:text-red-400">
										<span>�</span>
										<span>Logout</span>
									</a>
								</div>
							</div>
						</div>
					{/if}
				</div>
			{:else}
				<!-- Simple Login/Register Links -->
				<div class="flex items-center gap-4">
					<a
						href="/api/auth/login"
						class="flex items-center gap-1 rounded-lg border border-cyan-500/50 bg-gray-900 px-3 py-1.5 text-sm font-medium text-cyan-400 transition-all hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/30">
						<span>🔐</span>
						<span>Login</span>
					</a>
					<a
						href="/api/auth/register"
						class="flex items-center gap-1 rounded-lg border border-purple-500/50 bg-gray-900 px-3 py-1.5 text-sm font-medium text-purple-400 transition-all hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/30">
						<span>📝</span>
						<span>Register</span>
					</a>
				</div>
			{/if}
		</div>
	</div>
</nav>

<!-- Add padding-top to account for fixed nav -->
<div class="pt-14">
	{@render children()}
</div>
