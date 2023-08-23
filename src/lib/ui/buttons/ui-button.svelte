<script lang="ts">
	export let disabled: boolean = false;
	export let block: boolean = false;
	export let large: boolean = false;
</script>

<button
	class:disabled:bg-beta={disabled}
	class:w-full={block}
	class={`bg-alpha hover:opacity-[0.9] text-[white] text-[12px] leading-[16px] font-bold  px-4 rounded-[8px] 
      ${large ? 'py-[16px]' : 'py-[8px]'}`}
	{disabled}
>
	<slot />
</button>
