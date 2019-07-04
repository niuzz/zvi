<template>
    <ul class="menu-ul">
      <li v-for="(item, key) in menuList" :key="key">
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
    console.log(this.menuList)
  }
}
</script>

<style scoped lang="scss">
</style>
