<div class="relative flex items-center justify-between -mx-4 px-3 py-3 bg-white text-[#212121] shadow-custom-light">
  <div class="w-1/8 text-left">
    <slot name="leftIcon" />
  </div>
  <div class="w-1/2 absolute left-[50%] translate-x-[-50%] text-center">
    <slot />
  </div>
  <div class="w-1/8 text-right">
    <slot name="rightIcon" />
  </div>
</div>
