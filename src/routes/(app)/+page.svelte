<script lang="ts">
	import AppHeader from '$lib/ui/navbar/ui-navbar.svelte';
	import SearchIcon from '$lib/icons/search-icon.svelte';
	import FilterIcon from '$lib/icons/filter-icon.svelte';
	import FeatureMosqueList from '$lib/features/mosque-list/feature-mosque-list.svelte';
</script>

<AppHeader>
	<svelte:fragment slot="leftIcon">
		<SearchIcon />
	</svelte:fragment>
	<div>Все</div>
	<svelte:fragment slot="rightIcon">
		<FilterIcon />
	</svelte:fragment>
</AppHeader>
<FeatureMosqueList />
