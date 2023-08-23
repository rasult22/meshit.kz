<script lang="ts">
	import UIChip from '$lib/ui/chips/ui-chip.svelte';
	const lessonTypes = [
		{
			id: 1,
			name: 'Тәджуид'
		},
		{
			id: 2,
			name: 'Араб әліппесі'
		}
	];
	export let typeId: number;
</script>

<div class="flex space-x-1 overflow-auto pb-4 border-b-[1px] border-[#E0E0E0]">
	{#each lessonTypes as type (type.id)}
		<UIChip
			selected={typeId === type.id}
			on:click={() => {
				// setTypeId(type.id)
			}}
		>
			{type.name}
		</UIChip>
	{/each}
</div>
