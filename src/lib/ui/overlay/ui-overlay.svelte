<script lang="ts">
  export let isOpen: boolean
</script>
<div
  class:hidden={!isOpen}
  class="fixed z-[90] top-0 left-0 backdrop-blur-lg w-[100vw] bg-[rgba(0,0,0,0.4)] h-[100vh]"
></div>
