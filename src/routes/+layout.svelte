<script lang="ts">
	import { beforeNavigate, afterNavigate } from '$app/navigation';

	import '$lib/app.css';
	import UISpinner from '$lib/ui/spinner/ui-spinner.svelte';
	let navigatingState = 'default';
	let pageIsLoading = false;
	beforeNavigate(() => {
		pageIsLoading = true;
	});
	afterNavigate(() => {
		pageIsLoading = false;
	});
</script>

<div class="bg-red-500 text-white bottom-0 absolute z-[1000]">Root Layout</div>
<slot />
<div class="bg-red-500 p-4 text-white right-0 bottom-0 absolute z-[1000]">{navigatingState}</div>

{#if pageIsLoading}
	<div
		class="bg-[rgba(0,0,0,0.4)] fixed top-0 left-0 w-full h-full z-[1000] flex items-center justify-center"
	>
		<UISpinner />
	</div>
{/if}
