<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont home-btn">&#xe61e;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xeb9c;</span>
      请输入内容
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{city}}
        <span class="iconfont down-icon">&#xeb6d;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
    city: String
  }
}
</script>

<style lang="stylus" scoped>
  @import '~Styles/varibles.styl'
  .header
    display: flex
    height: $headerHeight
    line-height: $headerHeight
    background: $bgColor
    color: #fff
    .header-left
      .home-btn
        text-align: center
        float: left
        width: .64rem
    .header-input
      flex: 1
      height: .64rem
      line-height: .64rem
      margin-top: .12rem
      margin-left: .2rem
      padding-left: .1rem
      background: #fff
      border-radius: .1rem
      color: #ccc
    .header-right
      .down-icon
        margin-left: -.05rem
        font-size: .14rem
      width: 1.24rem
      float: right
      text-align: center
      color: #fff
</style>
