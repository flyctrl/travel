<template>
  <div>
    <div class="title">周末游去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" />
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Weekend',
  data () {
    return {
      recommendList: [{
        id: '001',
        title: '杭州野生动物世界',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/9f/7d45cc38259e0.jpg_r_640x214_156f4299.jpg',
        desc: '杭州，前世今生与你有一场美丽约会'
      }, {
        id: '002',
        title: '杭州野生动物世界',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/9f/7d45cc38259e0.jpg_r_640x214_156f4299.jpg',
        desc: '杭州，前世今生与你有一场美丽约会'
      }, {
        id: '003',
        title: '杭州野生动物世界',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/9f/7d45cc38259e0.jpg_r_640x214_156f4299.jpg',
        desc: '杭州，前世今生与你有一场美丽约会'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~Styles/mixins.styl'
  .title
    margin-top: .2rem
    line-height: .8rem
    background: #eee
    text-indent: .2rem
  .item
    overflow: hidden
    .item-img-wrapper
      overflow: hidden
      height: 0
      padding-bottom: 33.9%
      .item-img
        display: block
        width: 100%
    .item-info
      min-width: 0
      padding: .1rem
      .item-title
        line-height: .6rem
        font-size: .32rem
        ellipsis()
      .item-desc
        line-height: .4rem
        color: #929090
        ellipsis()
</style>
