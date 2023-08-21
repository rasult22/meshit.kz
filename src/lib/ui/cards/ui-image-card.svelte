<script lang="ts">
  export let selected: boolean
  export let text: string
  export let imgSrc: string
</script>

<div
  class={`${
    selected ? 'border-alpha' : 'border-[transparent]'
  } rounded-[8px] transition-all border-2 max-w-[120px] bg-[white] relative overflow-hidden pb-4`}
>
  <img src={imgSrc} alt="select image" />
  <div
    class={`${
      selected ? 'bg-alpha text-[white]' : 'bg-white'
    } py-[8px] text-center text-[14px] absolute bottom-0 w-full`}
  >
    {text}
  </div>
</div>
