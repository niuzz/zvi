<template>
  <div class="home-view-docs">
    <div class="navigator">
      <div class="logo">
        <router-link to="/">
          <img src="./zvi-logo.png" alt="zvi" />
        </router-link>
        <h1 class="title">zvi 移动端vue样式库</h1>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
<style lang="scss" scoped>
.home-view-docs {
  height: 100%;
  box-sizing: border-box;
  padding-top: 60px;
  @media screen and (max-width: 960px) {
    padding-top: 48px;
    &.home-view-docs {
      overflow: hidden;
      height: auto;
    }
  }
  .navigator {
    z-index: 5;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 60px;
    line-height: 60px;
    margin-top: 0;
    background-color: #16202d;
    @media screen and (max-width: 960px) {
      height: 48px;
      line-height: 48px;
    }
    .logo {
      float: left;
      height: 100%;
      img {
        height: 100%;
        transform: scale(0.8);
        transform-origin: 0 center;
        vertical-align: middle;
      }
      .title {
        display: inline-block;
        color: #ff9900;
        vertical-align: middle;
      }
      @media screen and (max-width: 960px) {
        float: none;
        img {
          transform-origin: center center;
        }
        .title {
          display: none;
        }
      }
    }
  }
}
</style>
