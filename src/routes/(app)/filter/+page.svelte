<script lang="ts">
	import AppHeader from '$lib/ui/navbar/ui-navbar.svelte';
	import BackIcon from '$lib/icons/back-icon.svelte';
	import { goto } from '$app/navigation';
	import GenderSelector from '$lib/features/filter/gender-selector.svelte';
	import CitySelector from '$lib/features/filter/city-selector.svelte';
	import MosqueSelector from '$lib/features/filter/mosque-selector.svelte';
	import UITitle from '$lib/ui/title/ui-title.svelte';
	import LessonsSelector from '$lib/features/filter/lessons-selector.svelte';
	import UIButton from '$lib/ui/buttons/ui-button.svelte';
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
<!-- Gender -->
<UITitle>Жынысы</UITitle>
<GenderSelector />

<!-- City -->
<UITitle>Қала</UITitle>
<CitySelector
	on:citySelect={(e) => {
		console.log(e.detail);
	}}
/>
<div class="opacity-[0.4] pointer-events-none">
	<UITitle>Мешіттер</UITitle>
	<MosqueSelector />
	<UITitle>Іс шара түрлері</UITitle>
	<LessonsSelector />
</div>
<div class="w-full flex flex-col fixed bottom-[16px] px-4 left-0">
	<UIButton
		on:click={() => {
			//
		}}
		large>Көрсету</UIButton
	>
</div>
