<script lang="ts">
	import { page } from '$app/stores';
	import { fade } from 'svelte/transition';
	console.log('+layout.svelte(app)');
	export let data;
</script>

<div class="bg-red-500 text-white bottom-0 absolute z-[1000]">App Layout</div>

{#key data.pathname}
	<div class="px-[16px] w-full" in:fade={{ duration: 200, delay: 50 }} out:fade={{ duration: 100 }}>
		<slot />
	</div>
{/key}
