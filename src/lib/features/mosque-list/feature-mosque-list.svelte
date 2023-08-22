<script lang="ts">
	import UICell from '$lib/ui/cell/ui-cell.svelte';
	import UISpinner from '$lib/ui/spinner/ui-spinner.svelte';
	import useCity from '$lib/hooks/useCity';
	import getWeekDay from '$lib/utils/getWeekDay';
	import useGender from '$lib/hooks/useGender';
	import type { Mosque } from '$lib/api/mosques';
	const [getCity] = useCity();
	const { getGender } = useGender();

	export let mosques: Mosque[];
</script>

<div class="space-y-3 my-2">
	Test Satpayev Branch
	{#each mosques as mosque (mosque.id)}
		<UICell
			href={'/mosque/' + mosque.id}
			title={mosque.name}
			imageSrc={mosque.image}
			tailText="толық тізім"
		>
			{#each mosque.lessons as x, index (index)}
				<div class={`${index < 2 ? '' : 'hidden'} text-[12px] leading-[16px] flex space-x-1`}>
					<div class="text-[#9E9E9E]">
						{getWeekDay(x.date)}
						{x.start_time.substring(0, 5)}-
						{x.end_time.substring(0, 5)}
					</div>
					<div>- {x.type.name}</div>
				</div>
			{/each}
		</UICell>
	{/each}
</div>
