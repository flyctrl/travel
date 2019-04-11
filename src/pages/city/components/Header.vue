<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <div class="iconfont back-btn">&#xeb99;</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
  @import '~Styles/varibles.styl'
  .header
    position: relative
    height: $headerHeight
    line-height: $headerHeight
    font-size: .32rem
    color: #fff
    text-align: center
    background: $bgColor
    .back-btn
      position: absolute
      top: 0
      left: 0
      text-align: center
      width: .64rem
      color: #fff
</style>
