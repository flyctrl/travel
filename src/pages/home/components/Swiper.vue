<template>
  <div class="header-swiper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [{
        id: 1,
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1711/b5/4b2278b83092cb02.jpg_750x200_9a01c2af.jpg'
      }, {
        id: 2,
        imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/942d87cc1576c333c77dc1f86af145cd.jpg_750x200_d25bf3eb.jpg'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .header-swiper >>> .swiper-pagination-bullet-active
    background: #fff
  .header-swiper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 26.67%
    background: #eee
    .swiper-img
      width: 100%
</style>
