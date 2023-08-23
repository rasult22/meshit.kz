<script lang="ts">
	import { type City, fetchCities } from '$lib/api/cities';
	import UIChip from '$lib/ui/chips/ui-chip.svelte';
	import { createEventDispatcher } from 'svelte';

	export let city: City;

	const dispatch = createEventDispatcher<{ citySelect: City }>();
	async function fetchData() {
		const data = await fetchCities();
		return data.data;
	}
</script>

{#await fetchData()}
	<div />
{:then data}
	<div class="flex space-x-1 overflow-auto pb-4 border-b-[1px] border-[#E0E0E0]">
		{#each data as { id, name } (id)}
			<UIChip
				selected={city?.id === id}
				on:click={() => {
					dispatch('citySelect', { id, name });
				}}
			>
				{name}
			</UIChip>
		{/each}
	</div>
{/await}
