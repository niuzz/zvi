<template>
    <button
      class="z-btn"
      :class="btnClass"
      @click="handleClick">
      <slot></slot>
    </button>
</template>

<script>
export default {
  props: {
    active: {
      type: Boolean,
      default: false
    },
    inline: {
      type: Boolean,
      default: false
    },
    disbaled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'middle'
    },
    plain: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    btnClass () {
      return {
        'z-btn_active': this.active,
        'z-btn_plain': this.plain,
        'z-btn_inline': this.inline
      }
    }
  },
  methods: {
    handleClick (event) {
      if (this.disbaled) {
        event.preventDefault()
        event.stopPropagation()
        return false
      }
      this.$emit('click', event)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/index.scss';

button, input {
  &.z-btn {
    width: 100%;
    border-width: 0;
    outline: 0;
    background-color: $color-dark-blue-grey;
    color: $color-orange-yellow;
  }
  &.z-btn_inline {
    width: auto;
  }
  &.z-btn_plain {
    border-width: 1px;
    background: transparent;
  }
}

</style>
