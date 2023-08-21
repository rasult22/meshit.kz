<script lang="ts">
  export let selected: boolean
  export let block: boolean
</script>

<div
  class={`${block ? 'w-full block' : 'inline-flex'}
  ${
    selected ? 'bg-alpha text-white' : 'bg-[#F5F5F5] text-[#616161]'
  } flex-shrink-0 px-[12px] text-center py-[10px] rounded-[30px] text-[14px] break-keep leading-[12px]`}
>
  <slot />
</div>
