<script lang="ts">
	import RightIcon from '$lib/icons/right-icon.svelte';

	export let imageSrc: string =
		'https://zhamagat.kz/media/mosques/b310700088c035a582058c830c0b068f.jpg';
	export let title: string;
	export let tailText: string;
	export let href: string;
</script>

<a {href} class={`flex space-x-2`}>
	<div
		class="w-[60px] h-[60px] flex-shrink-0 rounded-[16px] bg-cover bg-slate-400"
		style={`background-image: url(${imageSrc})`}
	/>
	<div class="border-b-[#E0E0E0] border-b-[1px] space-y-[4px] w-full">
		<div class="flex w-full">
			<div
				class="text-[16px] leading-[20px] max-w-[80%] text-ellipsis whitespace-nowrap overflow-hidden"
			>
				<span class="">{title}</span>
			</div>
			<div class="ml-auto flex flex-shrink-0 items-center">
				<span class="break-keep text-[12px] leading-[13px] text-[#9E9E9E]">
					{tailText}
				</span>
				<RightIcon />
			</div>
		</div>
		<div>
			<slot />
		</div>
	</div>
</a>
