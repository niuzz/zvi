<template>
  <div class="demo-block">
    <div class="demo-block-source">
      <slot name="source"></slot>
    </div>
    <slot></slot>
    <div class="demo-block-code"
         v-show="showCode">
      <slot name="highlight"></slot>
    </div>
  </div>
</template>
<script type="text/babel">

export default {
  data () {
    return {
      showCode: true
    }
  }
}
</script>
<style>

</style>
