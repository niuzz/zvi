<template>
  <div>
    <div class="nav-list-wrap">
      <side-menu :menu-list="menuList"></side-menu>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import sideMenu from './side-menu'
import menuConfig from '../common/config/menu'
export default {
  data () {
    return {
      menuList: menuConfig
    }
  },
  components: {
    sideMenu
  }
}
</script>
