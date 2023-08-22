<script lang="ts">
	import AppHeader from '$lib/ui/navbar/ui-navbar.svelte';
	import BackIcon from '$lib/icons/back-icon.svelte';
	import { goto } from '$app/navigation';
	import CitySelector from '$lib/features/filter/city-selector.svelte';
</script>

<AppHeader>
	<svelte:fragment slot="leftIcon">
		<BackIcon
			on:click={() => {
				if (history.length < 3) {
					goto('/');
				} else {
					history.back();
				}
			}}
		/>
	</svelte:fragment>
	<div>Фильтры</div>
	<svelte:fragment slot="rightIcon">
		<div>Тазалау</div>
	</svelte:fragment>
</AppHeader>
<div>id</div>

<CitySelector
	on:citySelect={(e) => {
		console.log(e.detail);
	}}
/>
