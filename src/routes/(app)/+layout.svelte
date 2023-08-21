<script lang="ts">
	import { page } from '$app/stores';
	import { blur } from 'svelte/transition';
</script>

<div class="bg-red-500 text-white bottom-0 absolute z-[1000]">App Layout</div>
{#key $page.url.pathname}
	<div class="px-[16px]" in:blur={{ duration: 200, delay: 300 }} out:blur={{ duration: 100 }}>
		<slot />
	</div>
{/key}
