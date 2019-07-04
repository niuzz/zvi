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
.highlight {
  /* font-family: Menlo, Consolas, Courier New, Courier, FreeMono, monospace;
  display: block;
  overflow-y: hidden;
  overflow-x: auto;
  padding: 1em 1em 1.5em 1em;
  background: #1c1d21;
  color: #c0c5ce;
  border-radius: 4px;
  box-shadow: 0.2em 0.2em 0.2em rgb(76, 78, 76); */
}
</style>
