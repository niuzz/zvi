<template>
  <div class="menu-ul-wrap">
    <ul class="menu-ul">
      <li v-for="(item, key) in menuList"
          :key="key"
          class="menu-li">
        <template v-if="item.name">
          <p class="menu-item-name"
             :class="item.angle ? 'menu-open': '' ">{{ item.name }}</p>
          <side-menu :menuList='item.subRoutes'></side-menu>
        </template>
        <router-link v-else
                     :to="{path: key}"
                     class="path">
          {{ item }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'side-menu',
  props: {
    menuList: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped lang="scss">
.menu-ul-wrap {
  font-size: 100%;
  background-color: rgb(238, 157, 91);
  height: 100%;
  .menu-li {
    max-height: 75px;
    text-indent: 60px;
  }
  .menu-item-name {
    font-size: 1em;
    margin-left: 30px;
    margin-right: 30px;
    text-indent: -20px;
    &.menu-open {
      font-size: 1.2em;
      border-bottom: #e3e3e3 solid 1px;
    }
  }
  .path {
    color: #666;
    line-height: 30px;
  }
}
</style>
