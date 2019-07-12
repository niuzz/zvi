<template>
  <div class="viewport-wrap">
    <div class="side-menu"
         :class="showMenu ? 'show-menu' : ''">
      <side-menu :menu-list="menuList"></side-menu>
    </div>
    <div class="docs-wrap">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import sideMenu from './side-menu'
import menuConfig from '../common/config/menu'
export default {
  data () {
    return {
      menuList: menuConfig,
      showMenu: false
    }
  },
  components: {
    sideMenu
  },
  created () {
    this.$bus.$on('toggle-menu', target => {
      if (target) {
        this.showMenu = true
      } else {
        this.showMenu = false
      }
    })
  },
  beforeDestroy () {
    this.$bus.$off('show-menu')
  }
}
</script>
<style lang="scss">
.viewport-wrap {
  display: flex;
  height: 100%;
  .side-menu {
    width: 260px;
    height: 100%;
    border-right: 1px solid #e3e3e3;
    @media screen and (max-width: 960px) {
      position: fixed;
      right: -260px;
      top: 48px;
      &.show-menu {
        right: 0;
      }
    }
  }
  .docs-wrap {
    flex: 1;
    height: 100%;
    padding: 54px 30px 30px;
    box-sizing: border-box;
    overflow-y: auto;
    @media screen and (max-width: 960px) {
      flex: 1, 1, auto;
    }
  }
}
</style>
