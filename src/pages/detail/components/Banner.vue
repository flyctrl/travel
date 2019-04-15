<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" :src="bannerImg" />
      <div class="banner-info">
        <div class="banner-title">{{sightName}}</div>
        <div class="banner-num">
          <div class="iconfont pic-icon">&#xe691;</div>
          {{gallaryImgs.length}}
        </div>
      </div>
    </div>
    <gallary :imgs="gallaryImgs" v-show="gallaryShow" @close="handleCloseGallary"></gallary>
  </div>
</template>

<script>
import Gallary from 'Common/gallary/Gallary'
export default {
  name: 'DetailBanner',
  props: {
    bannerImg: String,
    gallaryImgs: Array,
    sightName: String
  },
  components: {
    Gallary
  },
  data () {
    return {
      gallaryShow: false
    }
  },
  methods: {
    handleBannerClick () {
      this.gallaryShow = true
    },
    handleCloseGallary () {
      this.gallaryShow = false
    }
  }
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
      line-height: .48rem
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
        margin-top: .04rem
        .pic-icon
          display: inline-block
          font-size: .24rem
</style>
