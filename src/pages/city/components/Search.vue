<template>
  <div class="search">
    <input class="search-input" type="text" placeholder="输入城市名或拼音">
  </div>
</template>

<script>
export default {
  name: 'CitySearch'
}
</script>

<style lang="stylus" scoped>
  @import '~Styles/varibles.styl'
  .search
    margin-top: -0.01rem
    height: .72rem
    background: $bgColor
    padding: 0.05rem .1rem
    .search-input
      border: none
      outline: none
      box-sizing: border-box
      width: 100%
      height: .62rem
      line-height: .62rem
      display: block
      color: #666
      padding: 0 .1rem
      border-radius: .06rem
</style>
