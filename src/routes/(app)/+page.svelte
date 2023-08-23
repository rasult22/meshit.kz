<script lang="ts">
	import { queryParam } from 'sveltekit-search-params';
	import { browser } from '$app/environment';
	import AppHeader from '$lib/ui/navbar/ui-navbar.svelte';
	import SearchIcon from '$lib/icons/search-icon.svelte';
	import FilterIcon from '$lib/icons/filter-icon.svelte';
	import FeatureMosqueList from '$lib/features/mosque-list/feature-mosque-list.svelte';
	import useCity from '$lib/hooks/useCity.js';
	import useGender from '$lib/hooks/useGender.js';
	queryParam('city').subscribe((value) => {
		console.log(value, 'subscribe fn');
	});
	const cityQuery = queryParam('city');
	const genderQuery = queryParam('gender');
	const [getCity] = useCity();
	const { getGender } = useGender();
	if (browser) {
		const city = getCity()?.id;
		if (!$cityQuery) {
			cityQuery.set(city ? `${city}` : null);
		}
		genderQuery.set(getGender() || 'male');
	}

	export let data;

	$: ({ cities, banners, mosques } = data);
</script>

<AppHeader>
	<svelte:fragment slot="leftIcon">
		<SearchIcon />
	</svelte:fragment>
	<div>
		{#if $cityQuery}
			{cities.find((x) => x.id === Number($cityQuery))?.name}
		{:else}
			Все
		{/if}
	</div>
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
