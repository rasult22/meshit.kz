<script lang="ts">
	import { browser } from '$app/environment';
	import UIChip from '$lib/ui/chips/ui-chip.svelte';

	type Gender = 'male' | 'female';
	const genders = [
		{
			id: 'male',
			name: 'Ер'
		},
		{
			id: 'female',
			name: 'Әйел'
		}
	];
	let storageGender = null;
	if (browser) {
		storageGender = localStorage.getItem('app_user-chosen-gender');
	}
	let genderId = storageGender || 'male';
</script>

<div class="flex space-x-1 overflow-auto pb-4 border-b-[1px] border-[#E0E0E0]">
	{#each genders as gender}
		<div class="w-[50%]" key={gender.id}>
			<UIChip
				block
				selected={genderId === gender.id}
				on:click={() => {
					// setGenderId(gender.id)
					// onGenderChoose(gender.id as Gender)
				}}
			>
				{gender.name}
			</UIChip>
		</div>
	{/each}
</div>
