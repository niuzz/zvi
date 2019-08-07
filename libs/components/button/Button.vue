<template>
    <button
      class="z-btn"
      :class="btnClass"
      @click="handleClick">

      <svg class="icon" aria-hidden="true" v-if="icon && !iconback">
        <use :xlink:href='newIcon'></use>
      </svg>

      <slot></slot>

      <svg class="icon iconback" aria-hidden="true" v-if="icon && iconback">
        <use :xlink:href='newIcon'></use>
      </svg>

      <svg class="icon iconback refresh" aria-hidden="true" v-if="loading">
        <use xlink:href='#z-refresh'></use>
      </svg>

    </button>
</template>

<script>
export default {
  name: 'z-button',
  props: {
    inline: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    plain: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    iconback: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    btnClass () {
      return {
        'z-btn_active': this.active,
        'z-btn_plain': this.plain,
        'z-btn_inline': this.inline,
        'z-btn_disabled': this.disabled,
        'z-btn_loading': this.loading
      }
    },
    newIcon () {
      return `#${this.icon}`
    }
  },
  methods: {
    handleClick (event) {
      if (this.disabled) {
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
@keyframes circle{
    0%{ transform:rotate(0deg); }
    100%{ transform:rotate(360deg); }
}
button, input {
  &.z-btn {
    width: 100%;
    border-width: 0;
    margin: 0;
    padding: 1em;
    box-sizing: border-box;
    outline: none;
    border: none;
    background-color: $btn-bgc;
    color: $btn-color;
  }
  &.z-btn_inline {
    width: auto;
    margin-right: 1em;
  }
  &.z-btn_plain {
    border: 1px solid #666;
    border-width: 1px;
    background: transparent;
  }
  &.z-btn_disabled {
    border: 1px solid #ddd;
    border-width: 1px;
    background: #ddd;
    color: #aaa;
  }
  .iconback {
    margin-left: .5em;
  }
  .refresh {
    padding-right: 0px;
    animation:circle 1.5s infinite linear;
  }
}
</style>
