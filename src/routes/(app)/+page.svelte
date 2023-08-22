<script lang="ts">
	import AppHeader from '$lib/ui/navbar/ui-navbar.svelte';
	import SearchIcon from '$lib/icons/search-icon.svelte';
	import FilterIcon from '$lib/icons/filter-icon.svelte';
	import FeatureMosqueList from '$lib/features/mosque-list/feature-mosque-list.svelte';
	export let data;

	$: ({ cities, banners, mosques } = data);
</script>

<AppHeader>
	<svelte:fragment slot="leftIcon">
		<SearchIcon />
	</svelte:fragment>
	<div>Все</div>
	<svelte:fragment slot="rightIcon">
		<a href="/filter">
			<FilterIcon />
		</a>
	</svelte:fragment>
</AppHeader>
<FeatureMosqueList {mosques} />

Cities:
<p>
	{#each cities as city}
		<div>
			{city.name}
		</div>
	{/each}
</p>
<!-- <p>
	{#each lessons as lesson}
		<div>
			{lesson.type.name}
		</div>
	{/each}
</p> -->
<p>
	{#each banners as banner}
		<div>
			<img src={banner.image} alt="" />
		</div>
	{/each}
</p>
