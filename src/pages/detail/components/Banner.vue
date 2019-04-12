<template>
  <div class="banner">
    <img class="banner-img" src="http://img1.qunarzz.com/sight/p0/1903/e0/e0e0c6ca274ad49aa3.img.jpg_600x330_70691c22.jpg" />
    <div class="banner-info">
      <div class="banner-title">西溪国家湿地公园·周家村(AAAAA景区)</div>
      <div class="banner-num">
        <div class="iconfont pic-icon">&#xe691;</div>
        20
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBanner'
}
</script>

<style lang="stylus" scoped>
  .banner
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 55%
    background: #eee
    .banner-img
      display: block
      width: 100%
    .banner-info
      display: flex
      position: absolute
      bottom: 0
      right: 0
      left: 0
      line-height: .44rem
      color: #fff
      background-image: linear-gradient(to bottom,rgba(0,0,0,0),rgba(0,0,0,.8))
      .banner-title
        flex: 1
        padding-left: .1rem
        font-size: .32rem
      .banner-num
        width: 1.2rem
        height: .4rem
        line-height: .4rem
        background: rgba(0, 0, 0, .5)
        border-radius: .2rem
        margin-right: .1rem
        text-align: center
        .pic-icon
          display: inline-block
          font-size: .24rem
</style>
