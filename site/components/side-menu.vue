<template>
  <ul class="menu-ul">
    <li v-for="(item, key) in menuList"
        :key="key"
        class="menu-li">
      {{item.name}}
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    menuList: {
      type: Object,
      default () {
        return []
      }
    }
  },
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
  },
  mounted () {

  }
}
</script>

<style scoped lang="scss">
.menu-ul {
  font-size: 100%;
  .menu-li {
    max-height: 75px;
  }
}
</style>
