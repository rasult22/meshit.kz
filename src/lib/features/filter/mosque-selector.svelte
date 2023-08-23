<script lang="ts">
	import type { Mosque } from '$lib/api/mosques';
	import UIChip from '$lib/ui/chips/ui-chip.svelte';

	export let mosques: Mosque[] = [];
	export let selectedMosqueId: number;
</script>

<div class="flex space-x-1 overflow-auto pb-4 border-b-[1px] border-[#E0E0E0]">
	{#each mosques as mosque}
		(mosque.id)
		<UIChip
			selected={selectedMosqueId === mosque.id}
			on:click={() => {
				// setMosqueId(mosque.id);
				// onMosqueSelect(mosque);
			}}
		>
			{mosque.name}
		</UIChip>
	{/each}
	{#if mosques.length < 1}
		Нет данных
	{/if}
</div>
